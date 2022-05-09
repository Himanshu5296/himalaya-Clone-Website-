import React from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { ImRadioChecked2, ImRadioUnchecked } from 'react-icons/im';
import styles from "./Card.module.css";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    height: auto;
    display: grid;
    grid-template-columns: 5fr 4fr;
    gap: 80px;
    color: rgb(75, 74, 74);
    box-sizing: border-box;
    @media all and (max-width: 420px){
    margin-top:50%;
    margin-bottom: 5%;
    width: 100%;
}

`;
const Flex = {
    display: "flex",
    gap: 40
}
const Flex2 = {
    display: "flex",
    marginTop: 30,
}

const Rightdiv = styled.div`
    margin-left: 120px;
    padding-top: 52px;
    & >div>p{
        font-size: 13px;
    };
    @media all and (max-width: 420px){
    /* margin-top:50%;
    margin-bottom: 5%; */
    width: 125%;
    margin-left:0%;
   
}
`;
const Contact = styled.div`
    height: auto;
    border: 1px solid #b1b1b1;
    border-radius: 6px;
    line-height: 5px;
    padding: 10px;
    box-sizing: border-box;
    @media all and (max-width: 420px){
    display: none;
}
`;
const CreditCard = styled.div`
    height: auto;
    border-radius: 6px;
    line-height: 5px;
    box-sizing: border-box;
    &>div{
        display: flex;
        justify-content: space-between;
        border: 1px solid #b1b1b1;
    }
`;
const Flexed = styled.div`
    display: flex;
        gap: 10px;
        font-weight: 500;
        color: rgb(75, 74, 74);
        align-items: center;
        padding: 10px;
`;
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 20px;
    background-color: #FAFAFA;
    
    & input{
        height: 45px;
        width: 100%;
        border-radius: 6px;
        border: 1px solid grey;
    }

`;

const Btn1 = styled.button`
    height: 55px;
    width: 100px;
    background-color: #A3B49B;
    border-radius: 5px;
    cursor: pointer;
    border:0px;
    font-size: 15px;
    font-weight: 500;
`;
const Btn2 = styled.div`
    border: 0px;
    color: #A3B49B;
    background: transparent;
    cursor: pointer;
    margin-top: 15px;
`;
const Leftdiv = styled.div`
    background-color: #F4F7F3;
    padding: 50px 120px 0px 40px;
    @media all and (max-width: 420px){
    width:40%;
   margin-left:-00%
}
`;


export const PaymentCard = () => {
    let navigate = useNavigate()
    let cart = useSelector((state) => state.cartdata);
    let total = useSelector((state) => state.totalprice);
    return (
        <Container>
            <Rightdiv>
                <img style={{ width: "180px" }} src='https://cdn.shopify.com/s/files/1/0399/1728/9633/files/new-logo.png?3732' alt='himalya logo' />
                <div>
                    <p>Cart <MdKeyboardArrowRight />
                        Information <MdKeyboardArrowRight />
                        Shipping <MdKeyboardArrowRight />
                        Payment
                    </p>
                </div>
                <Contact>
                    <div style={Flex}>
                        <p>Contact </p>
                        <p>pankajkr885@gmail.com</p>
                    </div><hr />
                    <div style={Flex}>
                        <p>Ship to </p>
                        <p>1661 West Davis Street, Flat 34, Dallas TX 75208</p>
                    </div><hr />
                    <div style={Flex}>
                        <p>Method </p>
                        <p>Standard · $10.00</p>
                    </div>
                </Contact>
                <h2>Payment</h2>
                <p>All transactions are secure and encrypted.</p>
                <CreditCard>
                    <div>
                        <Flexed>
                            <ImRadioChecked2 style={{ color: "grey", height: 18, width: 18 }} />
                            <p>Credit card</p>
                        </Flexed>
                        <div>
                            <img style={{ width: "100px" }} src="https://www.hellowp.com/wp-content/uploads/2021/12/visa_master_ae.png" alt="visa" />
                        </div>
                    </div>
                    <Inputs>
                        <div>
                            <input placeholder="Card number" />
                        </div>
                        <div>
                            <input placeholder="Name on card" />
                        </div>
                        <div style={{ display: "flex", gap: 10 }}>
                            <input placeholder="Expiration date(MM/YY)" />
                            <input placeholder="Security code" />
                        </div>
                    </Inputs>
                    <div style={{ height: 50 }}>
                        <Flexed>
                            <ImRadioUnchecked style={{ color: "grey", height: 18, width: 18 }} />
                            <img style={{ width: "85px" }} src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/amazonpay@2x-6ed2b0ce5c20dfd0dc87f9363f0a57ecf9bb4e4fde26df79b3da96e6480cebd4.png" alt="visa" />
                        </Flexed>
                    </div>
                </CreditCard>
                <div style={{ ...Flex, ...Flex2 }}>
                    <Btn1 onClick={()=>{
                        navigate("/otp")
                    }}>Pay now</Btn1>
                    <Btn2 onClick={()=>{
                        navigate("/address")
                    }}>Return to shipping</Btn2>
                </div>

            </Rightdiv>
            <Leftdiv>
               {cart.map((el)=>{
                 return  <div>
                   <div className={styles.products}>
                       <div className={styles.products}>
                           <img style={{ width: 80, height: 60 }} src={el.img} alt="" />
                           <p>{el.title}</p>
                       </div>
                       <div>${el.payprice}</div>
                   </div>
               </div>
               })}
                <hr />
                <div style={{ display: "flex", gap: 10 }}>
                    <input className={styles.discount} type="text" placeholder='Discount code' />
                    <button className={styles.apply}>Apply</button>
                </div>
                <hr />
                <div className={styles.products}>
                    <p>Subtotal</p>
                    <p>${total}</p>
                </div>
                <div className={styles.products}>
                    <p>Shipping</p>
                    <p>$10.00</p>
                </div>
                <hr />
                <div className={styles.products}>
                    <p>Total</p>
                    <div style={{ display: "flex", gap: 5 }}>
                        <p style={{ marginTop: 35 }}>USD</p>
                        <p style={{ fontSize: 25, fontWeight: 500, color: "black" }}>${total+10}</p>
                    </div>
                </div>
            </Leftdiv>
        </Container>
    )
}
