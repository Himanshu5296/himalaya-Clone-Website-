import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { FormData, Input, Labelled, Wrapper } from './Sign.styled'
import './signStyles.css'
const Register = () => {
  const [formdata,setFormdata] = useState({})
  const {handleRegister} = useContext(AuthContext)
  const navigate = useNavigate()

  const InputChange = (e)=>{
    let input = e.target.name
    setFormdata({
      ...formdata,
      [input]:e.target.value
    })
  }
  const SubmitChange = (e)=>{
    e.preventDefault();
    localStorage.setItem("accountData",JSON.stringify(formdata))
    handleRegister();
    navigate("/signin")
  }
  return (
    <Wrapper style={{height:"550px"}}>
        <h1 className='create'>Create an Account</h1>
        <FormData>
            <h2>Personal Information</h2>
            <form onSubmit={SubmitChange}>
             <div>
               <div>
                 <Labelled>First Name*</Labelled>
                 <span style={{paddingLeft:"28%"}}>*Required Fields</span >
               </div>
               <Input type="text" name='firstName' placeholder='Enter First Name' onChange={InputChange}/>
             </div>
             <div/>
             <div>
               <Labelled>Last Name*</Labelled><br />
               <Input type="text" name='lastName' placeholder='Enter Last Name' onChange={InputChange} />
             </div>
             <div/>
             <div>
               <Labelled>Email*</Labelled><br />
               <Input type="text" name='email' placeholder='Enter Email' onChange={InputChange}/>
             </div>
             <div>
               <Labelled>Password*</Labelled><br />
               <Input type="password" name='password' placeholder='Enter Password' onChange={InputChange} />
             </div>
             <div>
               <input type="submit" value="CREATE" style={{height:"34px",
                           width:"95%",
                           fontSize:"18px",
                           backgroundColor:"#676",
                           border:"none",
                           color:"white"}} />
             </div>
           </form>
           <div style={{display:"flex"}}>
            <p className="returnTo" onClick={()=>navigate("/")}>or Return to Store</p>
            <p>Already Registerd? <Link to='/Login'>Click Here</Link></p>
           </div>
        </FormData>
    </Wrapper>
    )
}

export default Register