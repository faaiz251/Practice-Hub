import React from "react";
import { Navbar } from "../../common/NavBar/Navbar";
import { Typography } from "@mui/material";
import { Code1 } from "../../Code Editor/Code1/Code1";
import './Content1.css'


export function Content1() {
  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      <div className="header">
      <Navbar />
      </div>
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
            Given an array of integers nums and an integer target, return
            indices of the two numbers such that they add up to target. You may
            assume that each input would have exactly one solution, and you may
            not use the same element twice. You can return the answer in any
            order.
          </p>
          <h3>Example 1:</h3>
          <p>
            Input: nums = [2,7,11,15], target = 9<br />
            Output: [0, 1]
          </p>
          <p>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p>
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
            Only one valid answer exists.
            <br />
            Follow-up: Can you come up with an algorithm that is less than O(n2)
            time complexity?
          </p>
        </div>
      </div>
      <div className="coder">
      <Code1></Code1>
      </div>
    </div>
  );
}
