import jwt from 'jsonwebtoken'

export default function authenticateJwt(req,res,next) {
    const token = req.headers.authorization;
    console.log(token);
    if(token){
        jwt.verify(token,SECRET,(err,decoded)=>{
            if(err){
                res.status(401).send("Something went wrong")
            }
            else{
                next();
            }
        })
    }
    else{
        res.send("Unauthorised access!")
    }

}