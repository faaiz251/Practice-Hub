import React from "react";
import { Navbar } from "../../common/NavBar/Navbar";
import { Typography } from "@mui/material";
import { Code1 } from "../../Code Editor/Code1/Code1";

export function Content2() {
  return (
    <div style={{ height: "100%", overflow: "auto" }}>
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
          >
            Longest Substring Without repeating characters
          </Typography>
          <p>
            Given a string s, find the length of the longest substring without
            repeating characters.
          </p>
          <h3>Example 1:</h3>
          <p>
            Input: s = "abcabcbb"
            <br />
            Output: 3
          </p>
          <p>Explanation: The answer is "abc", with the length of 3.</p>
          <h3>Example 2:</h3>
          <p>
            Input: s = "bbbbb"
            <br />
            Output: 1
          </p>
          <p>Explanation: The answer is "b", with the length of 1.</p>
          <h3>Example 3:</h3>
          <p>
            Input: s = "pwwkew"
            <br />
            Output: 3
          </p>
          <p>Explanation: The answer is "wke", with the length of 3.</p>
          <p>
            Notice that the answer must be a substring, "pwke" is a subsequence
            and not a substring.
          </p>
        </div>
      </div>
      <Code1></Code1>
    </div>
  );
}
