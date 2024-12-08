// import React, { useRef, useState } from "react";
// import { Box, Stack } from "@mui/material";
// import { Editor } from "@monaco-editor/react";
// import LanguageSelector from "../LanguageSelector";
// import { CODE_SNIPPETS } from "../../../constants";
// import Output from "../Output/Output";
// import './CodeEditor1.css';

// export function CodeEditor() {
//   const editorRef = useRef();
//   const [value, setValue] = useState("");
//   const [language, setLanguage] = useState("javascript");

//   const onMount = (editor) => {
//     editorRef.current = editor;
//     editor.focus();
//   };

//   const onSelect = (language) => {
//     setLanguage(language);
//     setValue(CODE_SNIPPETS[language]);
//   };

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Stack direction="row" spacing={4}>
//         <Box sx={{ width: "50%" }}>
         
//           <LanguageSelector language={language} onSelect={onSelect} />
         
         
//           <Editor
//             options={{
//               minimap: {
//                 enabled: false,
//               },
//             }}
//             height="75vh"
//             theme="vs-dark"
//             language={language}
//             defaultValue={CODE_SNIPPETS[language]}
//             onMount={onMount}
//             value={value}
//             onChange={(value) => setValue(value)}
//           />
          
//         </Box>
//         <Box sx={{ flex: 1 }}>
//           <Output editorRef={editorRef} language={language} />
//         </Box>
//       </Stack>
//     </Box>
//   );
// }

import React, { useRef, useState } from "react";
import { Box, Stack } from "@mui/material";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "../LanguageSelector";
import { CODE_SNIPPETS } from "../../../constants";
import Output from "../Output/Output";

export function CodeEditor() {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box className="editor-container">
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <Box className="editor-box">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: { enabled: false },
            }}
            height="75vh"
            width='40vw'
            theme="vs-dark"
            language={language}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <div className="output">
          <Output editorRef={editorRef} language={language} />
          </div>
      </Stack>
    </Box>
  );
}

