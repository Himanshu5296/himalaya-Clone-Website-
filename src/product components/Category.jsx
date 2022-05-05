import React from 'react'
import { ProductCard } from "./ProductCard";
import "./Product.css";
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



export const Category = () => {
  let data = useSelector((state) => state.filterdata);
  
  return (<>  
      <h1 className="head">{data[0].category}</h1>
      <div className="productsection">
        <div className="category">
          <button className="categorybtn" >
            <h2>Product type</h2>
            <img
              style={{ height: "14px",  }}
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
            <div className="dash">
              <div></div>
              <div></div>
            </div>
            <div className="seriesbox" >
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="productgrid">
            {data.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </div>
        </div>
        </div>
         </>)
  }

