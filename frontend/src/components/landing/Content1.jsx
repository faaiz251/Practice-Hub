import React, { useState } from "react";
import { Navbar } from "../common/Navbar";
import { Typography, Button } from "@mui/material";
import MonacoEditor from "react-monaco-editor";

export function Content1() {
  return (
    <div style={{ height: "100%", overflow: "auto",  }}>
      <Navbar />
      <Problem1 />
    </div>
  );
}

function Problem1() {
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
        >
          Two Sum
        </Typography>
        <p>
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target. You may assume
          that each input would have exactly one solution, and you may not use
          the same element twice. You can return the answer in any order.
        </p>
        <h3>Example 1:</h3>
        <p>
          Input: nums = [2,7,11,15], target = 9<br />
          Output: [0, 1]
        </p>
        <p>
          Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
        </p>
        <h3>Example 2:</h3>
        <p>
          Input: nums = [3,2,4], target = 6<br />
          Output: [1,2]
        </p>
        <h3>Example 3:</h3>
        <p>
          Input: nums = [3,3], target = 6<br />
          Output: [0,1]
        </p>
        <p>
        Only one valid answer exists.<br/>
        Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
        </p>
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
    <div style={{ height: "500px", width: "100%" , border : '1px solid white'}}>
      <MonacoEditor
        width="100%"
        height="100%"
        language="java"
        theme="vs-dark"
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