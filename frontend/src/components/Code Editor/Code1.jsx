import Box from "@mui/material/Box";
import { CodeEditor } from "./CodeEditor1";

export function Code1() {
  return (
    <Box
      component="section"
      sx={{ minHeight: "100vh", p: 2, border: "1px dashed grey" }}
    >
      <CodeEditor></CodeEditor>
    </Box>
  );
}
