import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header"
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "50px 100px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "26px",
                marginRight: "10px",
                color: "#f9a825",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/content");
              }}
            >
              Practice
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#000",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/content");
              }}
            >
              Hub
            </div>
          </div>

          <Button
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#4dabf5",
              width: 100,
              color: "white",
              padding: "10px",
            }}
            onClick={async () => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}
