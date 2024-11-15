import { Navbar } from "../common/Navbar";
import { Typography , Button} from "@mui/material";

export function Content1() {
    return ( 
        
        <div style = {{
            height: "100%",
            overflow: "auto"
        }}>
            <Navbar></Navbar>
            <Problem1></Problem1>
        </div>
    )
}

function Problem1() {
    return (
        <div>
            <div class="problem-description" style = {{
                color: "white",
                flexDirection: "row",
                marginLeft: "30px"
            }}>
<Typography variant="h5" style={{display: "flex", marginTop: '20px', fontWeight: "bold",  color: "white" , textDecoration: "underline"}}>
                             <strong>Two Sum</strong></Typography>
    <p>Given an array of integers nums and an integer target, return indices of the two numbers </p> 
    <p>such that they add up to target.You may assume that each input would have exactly one</p>
    <p>solution, You may assume that each input would have exactly one solution, and you may </p>
    <p>not use the same element twice.You can return the answer in any order.</p>
    <h3>Example 1:</h3>
    <p>Input: nums = [2,7,11,15], target = 9<br/>Output: [0, 1]</p>
    <p></p>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    <h3>Example 2:</h3>
    <p>Input: nums = [3,2,4], target = 6<br/>
    Output: [1,2]</p>
    <h3>Example 3:</h3>
    <p>Input: nums = [3,3], target = 6<br/>
    Output: [0,1]</p>
    <p>
Only one valid answer exists.<br/>
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?</p>
  </div>
  
  <div className='testcase' style = {{
    color:"white"
  }}>
    <Typography variant="h5" style={{display: "flex", marginTop: '-555px', marginLeft: "650px",fontWeight: "bold",  color: "white" , textDecoration: "underline"}}>
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