import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Styled from "styled-components";

const Main = Styled.div`
width: 100%;
border-top: 1px solid #e9e7e7;
border-bottom: 1px solid #e9e7e7;
padding: 2.5%;
height: 250px;
`;

const Title = Styled.h1`
margin: 0;
font-weight: 540;
font-size: 24px;
text-align: left;
color: black;
`;

const Price = Styled.h1`
margin: 0;
font-weight: 500;
font-size: 24px;
text-align: left;
color: #a3b49b;
padding-top: 20px;
`;

const Flex = Styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 100%;
`
const Flex1 = Styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 98%;
height: 52px;
// border: 1px solid blue;
border-radius: 4rem;
background: #f8f8f8;
margin-top: 10px;
font-size: 20px;
font-weight: 600;
`
const Img1 = Styled.img`
width: 1.75rem;
height: 1.75rem;
opacity: 1;

`

const Img2 = Styled.img`
width: 12rem;
height: 12rem;
object-fit: cover;
opacity: 1;
opacity: 1;

`

const BtnIcon = Styled.img`
width: 20px;
height: 20px;
opacity: 1;
opacity: 1;
object-fit: cover;
`
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Main>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Item
              style={{ boxShadow: "none"}}
              sx={{
                height: 180,
              }}
            >
              <Flex>
              <Img1 src = "https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png" /> 
              <Img2 src = "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_bodybar_purifying-2_300x.png?v=1595909766" /> 
              </Flex>
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Item
              style={{ boxShadow: "none"}}
              sx={{
                height: 180,
              }}
            >
              <Grid
                container
                spacing={{ xs: 0.75, md: 0.75 }}
                columns={{ xs: 4, sm: 6, md: 16 }}
              >
                <Grid item xs={2} sm={2} md={7}>
                  <Item style={{ boxShadow: "none"}}>
                    <Title>Body Bar: Purifying (Neem & Turmeric)</Title>
                  </Item>
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                  <Item style={{ boxShadow: "none"}}>
                    <Price>$4.99</Price>
                  </Item>
                </Grid>
                <Grid item xs={2} sm={2} md={3}>
                  <Item style={{ boxShadow: "none"}}>
                    <Flex1> 
                    <BtnIcon src="https://img.icons8.com/ios-glyphs/30/000000/plus-math.png"></BtnIcon>
                    <Title>5</Title>
                    <BtnIcon src="https://img.icons8.com/ios-glyphs/30/000000/minus-math.png"></BtnIcon>
                    </Flex1>
                  </Item>
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                  <Item style={{ boxShadow: "none"}}>
                    <Price>$4.99</Price>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Main>
  );
}
