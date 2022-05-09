import styled from "styled-components";
export const Wrapper = styled.div`
height:420px;
width:400px;
//border:1px solid;
margin:auto;
margin-top:5%;
margin-bottom:5%;
font-family: Poppins, sans-serif;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding:10px;
@media all and (max-width: 420px){
   margin-top:50%;
   margin-bottom: 5%;
}
/* @media all and (max-width: 720px){
   margin-top:18%;
   margin-bottom: 5%;
} */
`
export const FormData = styled.div`
height:300px;
width:80%;
text-align:left;
// border:1px solid;
margin:auto;
font-family: Poppins, sans-serif;
`
export const Input = styled.input`
height:34px;
width:90%;
font-size:22px;
padding-left:10px;
margin-bottom:15px;
font-family: Poppins, sans-serif;
`
export const Labelled = styled.label`
color:#777777;
font-size:20px;
font-family: Poppins, sans-serif;`

export const LastData = styled.div`
height:230px;
width:75%;
text-align:left;
// border:1px solid;
margin:auto;
font-family: Poppins, sans-serif;

`