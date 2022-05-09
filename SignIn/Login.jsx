
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { FormData, Input, Labelled, LastData, Wrapper } from './Sign.styled'
import './signStyles.css'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem("accountData"))
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      handleLogin(email,password)
      if(email===data.email && password===data.password)
      {
        alert("Login Successfully")
       navigate("/")
      }
      else{
        alert("Data Inadequate")
      }
    }

  return (
    <div>
        <Wrapper>
       <h1>Already Registered?</h1>
        <FormData>
        <h2>Login</h2>
           <form onSubmit={handleSubmit}>
             <div>
               <div>
                 <Labelled>E-mail*</Labelled>
                 <span style={{paddingLeft:"40%"}}>*Required Fields</span >
               </div>
               <Input type="text" 
                      placeholder='Enter E-mail'
                      onChange={(e)=>setEmail(e.target.value)}/>
             </div>
             <div/>
             <div>
               <Labelled>Password*</Labelled><br />
               <Input type="password" 
                      placeholder='Enter Password'
                      onChange={(e)=>setPassword(e.target.value)} />
             </div>
             <div>
               <input type="submit" value="Login" style={{height:"34px",
                           width:"95%",
                           fontSize:"22px",
                           backgroundColor:"#676",
                           border:"none",
                           color:"white"}} />
             </div>
           </form>
           <p>Lost your password?</p>
        </FormData>
   </Wrapper>
    </div>
  )
}

export default Login