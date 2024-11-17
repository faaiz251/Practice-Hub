import React, { useState } from "react";
import { Navbar } from "../common/Navbar";
import { Typography, Button } from "@mui/material";
import MonacoEditor from "react-monaco-editor";

export function Content3() {
  return (
    <div style={{ height: "100%", overflow: "auto", }}>
      <Navbar />
      <Problem3 />
    </div>
  );
}

function Problem3() {
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
        >Regular Expression Matching
          
        </Typography>
        <p>Given an input string s and a pattern p, implement regular expression </p> <p>matching with support for '.' and '*' where:</p>

<p>'.' Matches any single character.​​​​</p>
<p>'*' Matches zero or more of the preceding element.</p>
<p>The matching should cover the entire input string (not partial).</p>
    <h3>Example 1:</h3>
    <p>Input: s = "aa", p = "a"<br/>Output: false</p>
    <p>Explanation: "a" does not match the entire string "aa".</p>
    <h3>Example 2:</h3>
    <p>Input: s = "aa", p = "a*"<br/>
    Output: true</p>
    <p>Explanation: '*' means zero or more of the preceding element, 'a'. </p><p>Therefore, by repeating 'a' once, it becomes "aa".</p>
    <h3>Example 3:</h3>
    <p>Input: s = "ab", p = ".*"<br/>
    Output: true</p>
    <p>
    Explanation: ".*" means "zero or more (*) of any character (.)".</p>
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
        language="javascript"
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
