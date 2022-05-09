import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decqty,
  deleteitem,
  emptycart,
  incqty,
  updateprice,
} from "../redux/action";
import { Link, useNavigate } from "react-router-dom";
import "./Cartitem.css";

export const Cart = () => {
  let navigate = useNavigate();
  let cartitems = useSelector((state) => state.cartdata);
  let totalprice = useSelector((state) => state.totalprice);

  console.log(cartitems);

  let dispatch = useDispatch();
  let handleinc = (id) => {
    dispatch(incqty(id));
  };
  let handledec = (id) => {
    dispatch(decqty(id));
  };
  let handleremove = (id) => {
    dispatch(deleteitem(id));
  };
  let handleupdate = () => {
    dispatch(updateprice());
    dispatch(deleteitem());
  };

  let handleempty = () => {
    dispatch(emptycart());
  };

  return (
    <>
    <div className="links">
      <Link className="link" to="/">Home</Link> 
      <p>/</p>
      <Link className="link" to="/cart">Your Shopping Cart</Link>
    </div>
      <div className="heading" style={{ textAlign: "center" }}>
        <h1>Shopping Cart</h1>
      </div>
      {cartitems.map((el) => {
        return (
          <div className="cartitem" key={el.id}>
            <div
              onClick={() => {
                handleremove(el.id);
              }}
            >
              <img
                style={{ height: "24px", cursor: "pointer" }}
                src="https://cdn-icons-png.flaticon.com/512/833/833262.png"
                alt=""
              />
            </div>
            <div className="cartimg">
              <img src={el.img} />
            </div>
            <div className="carttitle">
              <p>{el.title}</p>
            </div>

            <p className="pricy">${el.price}</p>
            <div className="quantity">
              <div
                onClick={() => {
                  handledec(el.id);
                }}
              >
                -
              </div>
              <p>{el.qty}</p>
              <div
                onClick={() => {
                  handleinc(el.id);
                }}
              >
                +
              </div>
            </div>
            <p className="pricy">${el.payprice}</p>
          </div>
        );
      })}

      <div className="downpart">
        <div
          className="continue"
          onClick={() => {
            navigate("/Shop");
          }}
        >
          <img
            style={{ height: "24px" }}
            src="https://cdn-icons.flaticon.com/png/512/4626/premium/4626208.png?token=exp=1651771015~hmac=631b1146b27cb746b62fd875f1ca0ae8"
            alt=""
          />
          <p>Continue Shopping</p>
        </div>
        <div className="amountsection">
          <div className="changebutton">
            <div onClick={handleempty}>
              <img
                style={{ height: "24px" }}
                src="https://cdn-icons-png.flaticon.com/512/833/833262.png"
              />
              <p>Clear Shopping Cart</p>
            </div>
            <div
              onClick={() => {
                handleupdate();
              }}
            >
              <img
                style={{ height: "24px" }}
                src="https://cdn-icons-png.flaticon.com/512/3455/3455626.png"
              />
              <p>Update Cart</p>
            </div>
          </div>
          <div className="amountdiv">
            <h3>Subtotal: ${totalprice}</h3>
            <h1>Grand Total: ${totalprice}</h1>
            <button onClick={()=>{
              navigate("/address")
            }}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  );
};
