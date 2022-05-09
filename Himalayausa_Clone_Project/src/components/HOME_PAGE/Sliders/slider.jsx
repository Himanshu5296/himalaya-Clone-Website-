import React, { useRef, useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from "../data.json"
import { useDispatch } from 'react-redux';
import { storage } from '../../../redux/action';
import { Arrows } from './Slider.styled';
import "./slider.css"
import leftArrow from "../../Images/backArrowlogo.png"
import rightArrow from "../../Images/rightarrow.png"
import { Link, useNavigate } from 'react-router-dom';


const CartSlider = () => {
  const Navigate=useNavigate()
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
  const mainData=data.BestSellersData
  const sliderRef=useRef(null)
  console.log("slide",sliderRef)


  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ]
  };
  return (
    <div className='main-slider-div'>
      <Arrows onClick={()=>sliderRef.current.slickPrev()}>
        <img src={leftArrow} alt="logo" className='arrow'/>
      </Arrows>
      <div className='slider-div'>
        <Slider ref={sliderRef} {...settings}>
          {
            mainData.map((el)=>(
              <div key={el.id} className='map-div' onClick={(()=>Navigate("/Shop"))}>
              <img className='image' src={el.img} alt="" />
              <Link to='/Shop' className='slider-title'>{el.title}</Link>
              <button className="bag"
                onMouseEnter={handleenter}
                onMouseLeave={handleleave}
                onClick={()=>handleCart(el)}
              >
                <img
                  style={{ height: "100%", width: "40px" }}
                  src="https://cdn2.iconfinder.com/data/icons/valentine-special/2048/869_-_Shopping_Bag-512.png"
                />
                {leave ? (
                  <p className="price"> $ {el.price}</p>
                ) : (
                  <p className="add">ADD TO CART</p>
                )}
              </button>
              </div>
              
            ))
          }
          
        </Slider>
      </div>
      <Arrows onClick={()=>sliderRef.current.slickNext()} >
        <img src={rightArrow} alt="" className='arrow1'/>
      </Arrows>
    </div>
  )
}

export default CartSlider