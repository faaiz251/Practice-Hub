import { Navbar } from "./Navbar";
import { Typography , Button} from "@mui/material";

export function Content2() {
    return ( 
        
        <div style = {{
            height: "100%",
            overflow: "auto"
        }}>
            <Navbar></Navbar>
            <Problem2></Problem2>
        </div>
    )
}

function Problem2() {
    return (
        <div>
            <div class="problem-description" style = {{
                color: "white",
                flexDirection: "row",
                marginLeft: "30px"
            }}>
<Typography variant="h5" style={{display: "flex", marginTop: '20px', fontWeight: "bold",  color: "white" , textDecoration: "underline"}}>
                             <strong>Longest Substring Without repeating characters</strong></Typography>
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
  
  <div className='testcase' style = {{
    color:"white"
  }}>
    <Typography variant="h5" style={{display: "flex", marginTop: '-502px', marginLeft: "650px",fontWeight: "bold",  color: "white" , textDecoration: "underline"}}>
    <strong>Code Editor (Java)</strong></Typography>
    <textarea placeholder="Write your Java code here..." style = {{
        marginLeft: "650px",
        marginTop: "10px",
        width: "45%",
        overflow: "auto",
        height: 350,
        resize: "vertical",
        padding: "1rem",
        fontsize: "1rem"
    }}></textarea>
<h1 style= {{
    marginLeft: "875px"
}}>TextCases</h1>
<table style = {{
    marginLeft: "700px",
    justifyContent: "space-between",
    fontSize: "25px"
}}>
                        <thead>
                            <tr>
                            <th>Input &nbsp; &nbsp; &nbsp;</th><br/><br/>
                            <th>Expected Output &nbsp; &nbsp; &nbsp;</th><br/>
                            <th>Output &nbsp; &nbsp; &nbsp;</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        </table>
                   
</div>

<Button
                variant="contained"
                fullWidth
                style={{
                    backgroundColor: '#4dabf5',
                    width: 100,
                    color: 'white',
                    padding: '9px',
                    borderRadius: '5px',
                    marginTop: "200px",
                    marginBottom: "10px",
                    marginLeft: "550px"
                }}
                onClick={async () => {
                  alert("Code Sumitted Successfully!")
                    }
                }
            >Submit</Button>
        </div>
    )
}