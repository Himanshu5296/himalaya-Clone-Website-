
import {Heading} from "./Heading/header"
import BasicGrid from "./Card/container"
import styled from "styled-components";

const Main = styled.div`
width: 80%;
height: 450px;
margin: 2% auto;
overflow-y: scroll;
`

export const Cart = () => {

    return (
          <Main>
         <Heading />
         <BasicGrid />
         </Main>
    )
}