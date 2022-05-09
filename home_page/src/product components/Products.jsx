import React, { useContext, useState } from "react";
import { ProductCard } from "./ProductCard";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { filterdata, sortdata } from "../redux/action";
import {  useNavigate,Link } from "react-router-dom";
import { ProductFlex } from "./ProductFlex";
import { AuthContext } from "../Context/AuthContext";

export const Products = () => {
  let {token}=useContext(AuthContext)
  console.log("token",token)
  let [hide, setHide] = useState(false);
  let [grid , setgrid] = useState(true);
  let [over,setOver] = useState(false)
 let navigate  = useNavigate()
  let data = useSelector((state) => state.productsdata);
  let dispatch = useDispatch();
  console.log(data);
 

  let handlesort = (e) => {
    dispatch(sortdata(e.target.value));
  };
// let handlefilter = (payload)=>{
//   dispatch(filterdata(payload))
// }
  let handlehide = () => {
    setHide(!hide);
  };
  if(!token){
    navigate("/SignIn")
  }
  // {token ? (Mayur part) : (<h3>Please <Link to="/login">Login</Link> to access this page</h3>)}

  return token?(
    <>
    <div className="links">
      <Link className="link" to="/">Home</Link> 
      <p>/</p>
      <Link className="link" to="/">Products</Link>
    </div>
      <h1 className="head">Products</h1>
      <div className="productsection">
        <div className="category">
          <button className="categorybtn" onClick={handlehide}>
            <h2> Health Category </h2>
            <img
              style={{ height: "12px", transform: hide && "scaleY(-1)" }}
              src="https://www.shareicon.net/download/2015/10/07/652366_arrows.svg"
              alt=""
            />
          </button>
          <div
            className="categorysection"
            style={{ visibility: hide ? "visible" : "hidden" }}
          >
            <p
              onClick={() => {
                // handlefilter("Herbal Supplements");
               navigate("/HerbalSupplements")
              }}
            >
              Herbal Supplements
            </p>
            <p
              onClick={() => {
                // handlefilter("Health Interests");
                navigate("/HealthInterests")
              }}
            >
              Health Interests
            </p>
            <p
              onClick={() => {
                // handlefilter("Oral Care");
                navigate("/OralCare")
                
              }}
            >
              Oral Care
            </p>
            <p
              onClick={() => {
                // handlefilter("Personal Care");
                navigate("/PersonalCare")
              }}
            >
              Personal Care
            </p>
          </div>
        </div>
        <div className="outer">
          <div className="filters">
            <select className="selectfilter" onChange={handlesort}>
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
            <div className="dash" onClick={()=>{setgrid(false)
            setOver(false)}}>
              <div></div>
              <div></div>
            </div>
            <div className="seriesbox" onClick={()=>{setgrid(true)
            setOver(false)}}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        { grid?
          <div className="productgrid" style={{height:over&&"auto"}}>
            {data.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })} 
          </div> : <div className="flexdiv" style={{height:over&&"auto"}}> {data.map((item) => {
              return <ProductFlex key={item.id} item={item} />;
            })} </div> }
            <div className="showmore">
            <button className="showbtn" onClick={()=>{
             setOver(true)
            }}>Show more</button>
            </div> 
        </div>
      </div>
    </>
  ): (<h3 className="login-first">Please <Link to="/SignIn">Login First</Link> to access this page</h3>)
};
