import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { filterdata } from "../redux/action";
import { ProductFlex } from "./ProductFlex";
import "./productflex.css";

export const Category = () => {
  let data = useSelector((state) => state.filterdata);
  let [grid, setgrid] = useState(true);
  let dispatch = useDispatch();
  let HerbalSupplements = useParams();
  console.log(HerbalSupplements.HerbalSupplements);

  useEffect(() => {
    dispatch(filterdata(HerbalSupplements.HerbalSupplements));
  }, [HerbalSupplements]);

  return (
    <>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <p>/</p>
        <Link className="link" to="/">
          {HerbalSupplements.HerbalSupplements}
        </Link>
      </div>
      <h1 className="head">{HerbalSupplements.HerbalSupplements}</h1>
      <div className="productsection">
        <div className="category">
          <button className="categorybtn">
            <h2>Product type</h2>
            <img
              style={{ height: "14px" }}
              src="https://www.shareicon.net/download/2015/10/07/652366_arrows.svg"
              alt=""
            />
          </button>
        </div>

        <div className="outer">
          <div className="filters">
            <select className="selectfilter">
              <option value="Bestselling">Best Selling</option>
              <option value="featured">Featured</option>
              <option value="Nasc">Name Ascending</option>
              <option value="Ndesc">Name Descending</option>
              <option value="Pasc">Price Ascending</option>
              <option value="Pdesc">Price Descending</option>
            </select>
            <select className="selectage">
              <option value="Bestselling">12</option>
              <option value="featured">16</option>
              <option value="Nasc">32</option>
              <option value="Ndesc">All</option>
            </select>
            <div
              className="dash"
              onClick={() => {
                setgrid(false);
              }}
            >
              <div></div>
              <div></div>
            </div>
            <div
              className="seriesbox"
              onClick={() => {
                setgrid(true);
              }}
            >
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          {grid ? (
            <div className="productgrid">
              {data.map((item) => {
                return <ProductCard key={item.id} item={item} />;
              })}
            </div>
          ) : (
            <div className="flexdiv" style={{ height: "auto" }}>
              {" "}
              {data.map((item) => {
                return <ProductFlex key={item.id} item={item} />;
              })}{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
