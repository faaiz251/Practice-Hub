import React, { useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { executeCode } from "../../../../../backend/Code Compiler API/api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      setIsError(!!result.stderr);
    } catch (error) {
      console.error(error);
      alert(error.message || "Unable to run code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="output-box">
      <div className="output">
      <Typography
        variant="h6"
        gutterBottom
        style={{
          color: "gray",
        }}
      >
        Output
      </Typography>
      <Button
        variant="outlined"
        color="success"
        sx={{ marginBottom: 2 }}
        onClick={runCode}
        disabled={isLoading}
      >
        {isLoading ? <CircularProgress size={24} /> : "Run Code"}
      </Button>
      </div>
      <Box 
        sx={{
          height: "75vh",
          width: "40vw",
          padding: 2,
          border: 1,
          borderRadius: 1,
          borderColor: isError ? "error.main" : "grey.800",
          color: isError ? "error.main" : "white",
          overflowY: "auto",
        }}
      >
        {output ? (
          output.map((line, i) => (
            <Typography key={i} variant="body2" sx={{ wordWrap: "break-word" }}>
              {line}
            </Typography>
          ))
        ) : (
          <Typography variant="body2" sx={{ color: "gray.500" }}>
            Click "Run Code" to see the output here
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default Output;
