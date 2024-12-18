import React from "react";
import { Navbar } from "../../common/NavBar/Navbar";
import { Typography } from "@mui/material";
import { Code1 } from "../../Code Editor/Code1/Code1";


export function Content3() {
  return (
    <div style={{ height: "100%", overflow: "auto" }}>
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
          >
            Regular Expression Matching
          </Typography>
          <p>
            Given an input string s and a pattern p, implement regular
            expression{" "}
          </p>{" "}
          <p>matching with support for '.' and '*' where:</p>
          <p>'.' Matches any single character.​​​​</p>
          <p>'*' Matches zero or more of the preceding element.</p>
          <p>
            The matching should cover the entire input string (not partial).
          </p>
          <h3>Example 1:</h3>
          <p>
            Input: s = "aa", p = "a"
            <br />
            Output: false
          </p>
          <p>Explanation: "a" does not match the entire string "aa".</p>
          <h3>Example 2:</h3>
          <p>
            Input: s = "aa", p = "a*"
            <br />
            Output: true
          </p>
          <p>
            Explanation: '*' means zero or more of the preceding element, 'a'.{" "}
          </p>
          <p>Therefore, by repeating 'a' once, it becomes "aa".</p>
          <h3>Example 3:</h3>
          <p>
            Input: s = "ab", p = ".*"
            <br />
            Output: true
          </p>
          <p>
            Explanation: ".*" means "zero or more (*) of any character (.)".
          </p>
        </div>
      </div>
      <Code1></Code1>
    </div>
  );
}
