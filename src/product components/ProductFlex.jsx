import React from "react";
import { useSelector } from "react-redux";
import "./productflex.css";

export const ProductFlex = () => {
  let data = useSelector((state) => state.productsdata);
  console.log(data);

  return (
    <div className="productflexcontainer">
      {data.map((el) => {
        return (
          <div className="flexitem">
            <div className="fleximage">
              <img src={el.img} />
            </div>
            <div className="flexdes">
              <h2>{el.title}</h2>
              <div>
                <p> {el.description}</p>
              </div>
            </div>
            <div className="flexprice">
              <p>$ {el.price}</p>
              <button className="flexadd">
                <img
                  style={{ height: "100%", width: "30px" }}
                  src="https://cdn2.iconfinder.com/data/icons/valentine-special/2048/869_-_Shopping_Bag-512.png"
                />
                <p>ADD TO CART</p>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
