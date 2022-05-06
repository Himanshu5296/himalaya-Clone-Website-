import React from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { ImRadioChecked2, ImRadioUnchecked } from 'react-icons/im';
import styles from "./Card.module.css";

const Container = styled.div`
    height: 1500px;
    display: grid;
    grid-template-columns: 5fr 4fr;
    gap: 80px;
    color: rgb(75, 74, 74);
    box-sizing: border-box;

`;
const Flex = {
    display: "flex",
    gap: 40
}
const Flex2 = {
    display: "flex",
    marginTop: 30
}

const Rightdiv = styled.div`
    margin-left: 120px;
    padding-top: 52px;
    & >div>p{
        font-size: 13px;
    }
`;
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 20px;
    
    & input{
        height: 45px;
        width: 100%;
        border-radius: 6px;
        border: 1px solid grey;
    }
`;

const Btn1 = styled.button`
    height: 55px;
    width: 200px;
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
`;


export const Address = () => {
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
                <h2>Shipping address</h2>
                <Inputs>
                    <div style={{ display: "flex", gap: 10 }}>
                        <input placeholder="First name" />
                        <input placeholder="Last name" />
                    </div>
                    <div>
                        <input placeholder="Address" />
                    </div>
                    <div>
                        <input placeholder="Appartments, suits, etc (Optional)" />
                    </div>
                    <div>
                        <input placeholder="City" />
                    </div>
                    <div style={{ display: "flex", gap: 10 }}>
                        <select style={{ width: "100%", borderRadius: 5 }}>
                            <option>Country/Region</option>
                            <option>Unites States</option>
                        </select>
                        <select style={{ width: "100%", borderRadius: 5 }}>
                            <option>State</option>
                            <option>Alabama</option>
                            <option>Alaska</option>
                            <option>Arizona</option>
                            <option>California</option>
                            <option>Colorado</option>
                            <option>Florida</option>
                            <option>Georgia</option>
                            <option>Hawaii</option>
                            <option>Idaho</option>
                            <option>Indiana</option>
                            <option>Kansas</option>
                            <option>Kentucky</option>
                            <option>Lousiana</option>
                            <option>Michigan</option>
                            <option>Missisippi</option>
                            <option>Montana</option>
                            <option>Nebraska</option>
                            <option>Nevada</option>
                            <option>New Jersey</option>
                            <option>New Maxico</option>
                            <option>New York</option>
                            <option>North Carolina</option>
                            <option>Ohio</option>
                            <option>Pennsylvania</option>
                            <option>Puerto Rico</option>
                            <option>South Carolina</option>
                            <option>Texas</option>
                            <option>U.S Virgin Islands</option>
                            <option>Washington</option>
                            <option>Washington DC</option>
                        </select>
                        <input placeholder="Zip code" />
                    </div>
                    <div style={{ display: "flex", gap: 10 }}>
                        <input placeholder="Expiration date(MM/YY)" />
                        <input placeholder="Security code" />
                    </div>
                </Inputs>
                <div style={{ ...Flex, ...Flex2 }}>
                    <Btn1>Continue to payment</Btn1>
                    <Btn2>Return to cart</Btn2>
                </div>
            </Rightdiv>
            <Leftdiv>
                <div>
                    <div className={styles.products}>
                        <div className={styles.products}>
                            <img style={{ width: 80, height: 60 }} src="https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Whitening-Mint---Box-Tube_small.png?v=1597743896" alt="" />
                            <p>Simply Mint Whitening Toothpaste</p>
                        </div>
                        <div>$5.99</div>
                    </div>
                </div>
                <hr />
                <div style={{ display: "flex", gap: 10 }}>
                    <input className={styles.discount} type="text" placeholder='Discount code' />
                    <button className={styles.apply}>Apply</button>
                </div>
                <hr />
                <div className={styles.products}>
                    <p>Subtotal</p>
                    <p>$15.97</p>
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
                        <p style={{ fontSize: 25, fontWeight: 500, color: "black" }}>$25.97</p>
                    </div>
                </div>
            </Leftdiv>
        </Container>
    )
}
