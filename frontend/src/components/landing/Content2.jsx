import React, { useState } from "react";
import { Navbar } from "../common/Navbar";
import { Typography, Button } from "@mui/material";
import MonacoEditor from "react-monaco-editor";

export function Content2() {
  return (
    <div style={{ height: "100%", overflow: "auto",  }}>
      <Navbar />
      <Problem2 />
    </div>
  );
}

function Problem2() {
  return (
    <div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div style={{ flex: 1, marginRight: "20px", color: "white" }}>
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
            textDecoration: "underline",
            marginBottom: "10px",
          }}
        >Longest Substring Without repeating characters
          
        </Typography>
        <p>Given a string s, find the length of the longest substring without repeating characters.</p> 
     <h3>Example 1:</h3>
    <p>Input: s = "abcabcbb"<br/>Output: 3</p>
    <p>Explanation: The answer is "abc", with the length of 3.</p>
     <h3>Example 2:</h3>
    <p>Input: s = "bbbbb"<br/>
    Output: 1</p>
     <p>Explanation: The answer is "b", with the length of 1.</p>
    <h3>Example 3:</h3>
   <p>Input: s = "pwwkew"<br/>
    Output: 3</p>
    <p>
     Explanation: The answer is "wke", with the length of 3.</p>
     <p>Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.</p>
      </div>

      <div style={{ flex: 1 }}>
        <div>
          <Typography
            variant="h5"
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
              color: "white",
              marginBottom: "10px",
            }}
          >
            Code Editor (Java)
          </Typography>
          <MyEditor />
        </div>

        <div style={{ marginTop: "20px", color: "white", textAlign: "center"}}>
          <h1>Test Cases</h1>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid white", padding: "10px" }}>
                  Input
                </th>
                <th style={{ borderBottom: "1px solid white", padding: "10px" }}>
                  Expected Output
                </th>
                <th style={{ borderBottom: "1px solid white", padding: "10px" }}>
                  Output
                </th>
                <th style={{ borderBottom: "1px solid white", padding: "10px" }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px" }}></td>
                <td style={{ padding: "10px" }}></td>
                <td style={{ padding: "10px" }}></td>
                <td style={{ padding: "10px" }}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
          <div
          style={{
        display: "flex",
        justifyContent: "center",
     }}>
  <Button
    variant="contained"
    style={{
      backgroundColor: "#4dabf5",
      color: "white",
      padding: "8px 20px",
      marginTop: "250px",
      marginBottom: "10px"
    }}
  >
    Submit
  </Button>
</div>
    </div>
  );
}

function MyEditor() {
  const [code, setCode] = useState("// Write your code here...");

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MonacoEditor
        width="100%"
        height="100%"
        language="java"
        theme="vs-white"
        value={code}
        onChange={(e) => {
            setCode(e.target.value);
        }}
        options={{
          selectOnLineNumbers: true,
          minimap: { enabled: true },
        }}
      />
    </div>
  );
}
