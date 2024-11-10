import { Navbar } from "./Navbar";
import { Typography , Button} from "@mui/material";

export function Content3() {
    return ( 
        
        <div style = {{
            height: "100%",
            overflow: "auto"
        }}>
            <Navbar></Navbar>
            <Problem3></Problem3>
        </div>
    )
}

function Problem3() {
    return (
        <div>
            <div class="problem-description" style = {{
                color: "white",
                flexDirection: "row",
                marginLeft: "30px"
            }}>
<Typography variant="h5" style={{display: "flex", marginTop: '20px', fontWeight: "bold",  color: "white" , textDecoration: "underline"}}>
                             <strong>Regular Expression Matching</strong></Typography>
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
  
  <div className='testcase' style = {{
    color:"white"
  }}>
    <Typography variant="h5" style={{display: "flex", marginTop: '-642px', marginLeft: "650px",fontWeight: "bold",  color: "white" , textDecoration: "underline"}}>
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