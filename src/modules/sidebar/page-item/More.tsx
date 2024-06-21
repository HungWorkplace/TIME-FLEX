import { BsThreeDots } from "react-icons/bs";
import { usePageItemContext } from "./context/page-item";
import { usePages } from "@/store/pages";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useTasks } from "@/store/tasks";

interface MoreProps {
  onEditable: (value: boolean) => void;
  className?: string;
}

// # Component
export default function More({ onEditable, className }: MoreProps) {
  const page = usePageItemContext();
  const deletePage = usePages((state) => state.deletePage);
  const deleteTasksByPageSlug = useTasks(
    (state) => state.deleteTasksByPageSlug
  );
  const navigate = useNavigate();

  const handleDelete = () => {
    deletePage(page.slug);
    deleteTasksByPageSlug(page.slug);
    navigate("/pages");
  };

  return (
    <>
      <Popover>
        <PopoverTrigger
          className={cn("text-[#9f9f9f] hover:text-[#222222]", className)}
        >
          <BsThreeDots size={16} />
        </PopoverTrigger>
        <PopoverContent
          align="start"
          alignOffset={15}
          sideOffset={-10}
          className="w-36 text-sm p-1 z-50"
        >
          <div
            onClick={() => onEditable(true)}
            className="hover:bg-[#f8f8f8] rounded-md px-3 py-2 cursor-pointer"
          >
            Rename
          </div>

          <AlertDialog>
            <AlertDialogTrigger className="hover:bg-[#f8f8f8] hover:text-red-500 rounded-md px-3 py-2 cursor-pointer">
              Delete
            </AlertDialogTrigger>

            <AlertDialogContent className="max-w-md w-full">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Delete page "{page.title}" ?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  All tasks in the page will be deleted
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  variant={"destructive"}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </PopoverContent>
      </Popover>
    </>
  );
}
