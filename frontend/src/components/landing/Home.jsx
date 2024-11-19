import React from "react";
import { MainNav } from "../common/MainNav";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <MainNav></MainNav>

      <div
        style={{
          marginTop: "-50px",
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: "1100px",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              marginLeft: "50px",
              padding: "20px",
              borderRadius: "20px",
              transform: "rotate(-5deg)",
            }}
          >
            <div
              style={{
                width: "250px",
                height: "150px",
                border: "1px solid #ccc",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <div style={{ display: "flex", gap: "5px", padding: "10px" }}>
                <div
                  style={{
                    backgroundColor: "#4fc3f7",
                    height: "20px",
                    width: "20px",
                    borderRadius: "5px",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#81c784",
                    height: "20px",
                    width: "20px",
                    borderRadius: "5px",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#ffb74d",
                    height: "20px",
                    width: "20px",
                    borderRadius: "5px",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#e57373",
                    height: "20px",
                    width: "20px",
                    borderRadius: "5px",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#4fc3f7",
                    height: "20px",
                    width: "20px",
                    borderRadius: "100px",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div
            style={{
              textAlign: "left",
              maxWidth: "500px",
              marginLeft: "20px",
            }}
          >
            <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
              A New Way to Learn
            </h1>
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "grey" }}>
              Practice Hub is the best platform to help you enhance your skills,
              expand your knowledge and prepare for technical interviews.
            </p>
            <button
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                backgroundColor: "#26a69a",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
