import { Task as TaskType, useTasks } from "@/store/tasks";
import Task from "../Task";
import {
  DataRef,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import * as Portal from "@radix-ui/react-portal";
import { useState } from "react";
import { useParams } from "react-router-dom";

// # Component
export default function IncompleteTask() {
  const [draggingTask, setDraggingTask] = useState<TaskType | null>(null);
  const { slug } = useParams();

  const tasks = useTasks((state) => state.tasks);

  const filteredTasks = tasks.filter(
    (task) => !task.completed && task.pageSlug === slug
  );

  const setTasks = useTasks((state) => state.setTasks);

  const sensors = useSensors(
    // press within 5px to trigger drag
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    // press within 250ms to fire event
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 500,
      },
    })
  );

  // When dragging a task, set the task to the draggingTask state
  const handleDragStart = (event: DragStartEvent) => {
    const taskData = event.active.data as DataRef<{ task: TaskType }>;

    if (!taskData.current?.task) return;

    setDraggingTask(taskData.current.task);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setDraggingTask(null);

    const { active, over } = event;

    // If Drag and drop outside DndContext, these code following arise error
    if (!over) return;
    if (active.id === over.id) return;

    // Do not use filteredTasks here, because it will cause the wrong order
    const oldIndex = tasks.findIndex((task) => task.id === active.id);
    const newIndex = tasks.findIndex((task) => task.id === over.id);
    const newOrder = arrayMove(tasks, oldIndex, newIndex);

    setTasks(newOrder);
  };

  // When dragging but suddenly press "escape" key
  const handleDragCancel = () => {
    setDraggingTask(null);
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext
        // have to use id rather than item itself
        items={filteredTasks.map((task) => task.id)}
        strategy={rectSortingStrategy}
      >
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </SortableContext>

      {draggingTask && (
        <Portal.Root>
          <DragOverlay>
            <Task task={draggingTask} isOverlay />
          </DragOverlay>
        </Portal.Root>
      )}
    </DndContext>
  );
}
