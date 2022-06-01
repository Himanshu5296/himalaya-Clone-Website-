import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [registered,setRegistered] = useState(true)


  const handleLogin = async(email, password) => {
    let res =  await fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:"eve.holt@reqres.in",
       password: "cityslicka"
      })
    })
    let data =  await res.json()
    console.log(data.token)
    setToken(data.token)
  };
  const handleLogout = () => {
    setToken("")
  };

  const handleRegister = ()=>{
    setRegistered(false)
  }

  const value = { handleLogin, token, handleLogout , registered, handleRegister };

  return ( 
     <AuthContext.Provider value={value}>
     {children}
     </AuthContext.Provider>)
      
};

export { AuthContext, AuthContextProvider };