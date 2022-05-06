import React from "react";
import { useDispatch } from "react-redux";
import { storage } from "../redux/action";
import "./productflex.css";

export const ProductFlex = ({item}) => {
let dispatch = useDispatch()
let handleCart = (data)=>{
  dispatch(storage(data))
 }

  return (
    <div className="productflexcontainer">
       <div className="flexitem">
            <div className="fleximage">
              <img src={item.img} />
            </div>
            <div className="flexdes">
              <h2>{item.title}</h2>
              <div>
                <p> {item.description}</p>
              </div>
            </div>
            <div className="flexprice">
              <p>$ {item.price}</p>
              <button className="flexadd" onClick={()=>{handleCart(item)}}>
                <img
                  style={{ height: "100%", width: "30px" }}
                  src="https://cdn2.iconfinder.com/data/icons/valentine-special/2048/869_-_Shopping_Bag-512.png"
                />
                <p>ADD TO CART</p>
              </button>
            </div>
          </div>
    </div>
  );
};
