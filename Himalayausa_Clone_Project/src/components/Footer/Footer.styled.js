import styled from "styled-components"

export const Foot = styled.div`
height:480px;
width:100%;
margin:auto;
background-color: rgb(246, 253, 246);
// border:1px solid ;
font-family: Poppins, sans-serif;
@media (max-width: 420px) {
    flex-direction: column;
    height:1100px;
    width: 100%;
    /* margin-top:50% */
  }
`;

export const FootFirstSection = styled.div`
height:300px;
width:90%;
//border:1px solid;
margin:auto;
margin-top:20px;
display:flex;
gap:10px;
font-family: Poppins, sans-serif;
justify-content:space-between;
@media (max-width: 420px) {
    flex-direction: column;
    height:950px;
}
@media (max-width: 720px) {
font-size:13px;
gap:10px
}

`;

export const FootLastSection = styled.div`
height:30px;
width:90%;
border:1px solid #aba;
text-align:center;
margin:auto;
margin-top:20px;
font-size:13px;
padding-top:10px;
@media (max-width: 420px) {
    height:60px;
}
`;

export const FootSecondSection = styled.div`
height:25px;
width:90%;
// border:1px solid;
text-align:left;
margin:auto;
margin-top:30px;
@media (max-width: 420px) {
    flex-direction: column;
  }
`;