import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../redux/action";
import { saveData } from "../utils/loacalStorage";
import "./Product.css";

export const ProductCard = ({ item }) => {
  let [leave, setleave] = useState(true);
  
  let dispatch = useDispatch()

  let handleenter = () => {
    setleave(false);
  };

  let handleleave = () => {
    setleave(true);
  };

  let handleCart = (data)=>{
   dispatch(storage(data))
  }


  return (
    <div className="productitem" key={item.id}>
      <div>
        <img className="productimage" src={item.img} />
      </div>
      <p className="title">{item.title}</p>

      <button
        className="bag"
        onMouseEnter={handleenter}
        onMouseLeave={handleleave}
        onClick={()=>handleCart(item)}
      >
        <img
          style={{ height: "100%", width: "40px" }}
          src="https://cdn2.iconfinder.com/data/icons/valentine-special/2048/869_-_Shopping_Bag-512.png"
        />
        {leave ? (
          <p className="price"> $ {item.price}</p>
        ) : (
          <p className="add">ADD TO CART</p>
        )}
      </button>
    </div>
  );
};
