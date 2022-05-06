import React, { useRef } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from "../data.json"
import { Arrows } from './Slider.styled';
import "./slider.css"
import leftArrow from "../../Images/backArrowlogo.png"
import rightArrow from "../../Images/rightarrow.png"


const CartSlider = () => {
  const mainData=data.BestSellersData
  const sliderRef=useRef(null)
  console.log(sliderRef.current)
  return (
    <div className='main-slider-div'>
      <Arrows onClick={()=>sliderRef.current.slickPrev()}>
        <img src={leftArrow} alt="logo" className='arrow'/>
      </Arrows>
      <div className='slider-div'>
        <Slider ref={sliderRef} slidesToShow={4} dots={true}>
          {
            mainData.map((el)=>(
              <div key={el.id} className='map-div'>
              <img className='image' src={el.img} alt="" />
              <p className='slider-title'>{el.title}</p>
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