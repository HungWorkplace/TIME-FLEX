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
    <NavLink
      to={`/pages/${page.slug}`}
      className="flex justify-between items-center group pl-[0.857rem] pr-3 h-10 rounded-md hover:text-[#3669ba]"
      style={({ isActive }) => ({
        backgroundColor: isActive ? "#e3f2fe" : "transparent",
      })}
    >
      <Stack spacing={1} direction={"row"} alignItems={"center"}>
        <CiFileOn color="#757575" size={18} />
        <EditorContent editor={editor} />
      </Stack>
      <More onEditable={toggleEditable} />
    </NavLink>
  );
}
