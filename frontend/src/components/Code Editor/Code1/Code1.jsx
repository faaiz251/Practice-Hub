import Box from "@mui/material/Box";
import { CodeEditor } from "../Code Editor 1/CodeEditor1";

export function Code1() {
  return (
    <Box
      className ='full-box'
      component="section"
      sx={{ minHeight: "100vh", p: 2, borderTop: '1px dashed gray'}}
    >
      <CodeEditor></CodeEditor>
    </Box>
  );
}
