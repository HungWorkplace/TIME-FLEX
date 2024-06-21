import { Stack } from "@mui/material";
import { EditorContent } from "@tiptap/react";
import { CiFileOn } from "react-icons/ci";
import More from "./More";
import usePageTitleEditor from "@/hooks/usePageTitleEditor";
import { NavLink } from "react-router-dom";
import { usePageItemContext } from "./context/page-item";

// # Component
export default function PageTitle() {
  const page = usePageItemContext();

  const editor = usePageTitleEditor({
    page,
    editable: false,
    inputClass: "text-sm",
  });

  const toggleEditable = (value: boolean) => {
    editor?.setEditable(value);
    editor?.commands.focus();
    editor?.commands.selectAll();
  };

  return (
    <div className="relative group">
      <NavLink
        to={`/pages/${page.slug}`}
        className="flex justify-between items-center pl-[0.857rem] h-10 rounded-md hover:text-[#3669ba]"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#e3f2fe" : "transparent",
        })}
      >
        <Stack spacing={1} direction={"row"} alignItems={"center"}>
          <CiFileOn color="#757575" size={18} />
          <EditorContent editor={editor} />
        </Stack>
      </NavLink>
      <More
        onEditable={toggleEditable}
        className="absolute h-full pl-3 pr-5 inline-flex top-0 right-0 items-center visible md:invisible group-hover:visible"
      />
    </div>
  );
}
