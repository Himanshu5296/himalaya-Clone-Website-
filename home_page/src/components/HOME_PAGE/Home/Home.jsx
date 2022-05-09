import React, { useEffect, useState } from 'react'
import './home.css'
import { Link, useNavigate } from 'react-router-dom'
import data from "../data.json"
import CartSlider from '../Sliders/slider'
import Reviews from '../Sliders/dataSlider'
import Instagram from '../InstagramData/Insta';
import instaLogo from '../../Images/instalogo.jpg'
import facebookLogo from '../../Images/facebook.png'
import instagram from '../../Images/instalogo2.png'


const Home = () => {
  const [mainData,setData]=useState([])
  const Navigate=useNavigate()
  let categoryData=data.CategoryData
  console.log(categoryData)
  const getData=async()=>{
    let res=await fetch('https://instafeed.nfcube.com/feed/v4?charge=0&fu=0&limit=4&account=himalaya-wellness-us.myshopify.com&fid=0&hash=97e31002d3cf6591f86cba680b1d4d89&callback=cache.parse')
    let details=await res.json()
    
    let hello=details.data
    setData(hello)
    console.log('mainData',mainData)
    console.log('hello',hello)
  }
  useEffect(()=>{
    getData()
  },[])


  return (
    <div className='home_page'>
        
        <div>
        {/* <Searchbar/> */}
        {/* <Navbar/> */}
            <div className='background-image'>
              <div className='background-image-data'>
                <div className='ASHWAGANDHA'><p>ASHWAGANDHA</p></div>
                <p className='line'>A star performer for stress and energy in a</p>
                <p className='line2'>potent, organic caplet.</p>
                <button className='button' onClick={()=>Navigate("/Shop")}>SHOP NOW</button>
              </div>
              <div className='back-img'>
                <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/767_x_476_HUSA_NEW_WEB_Carousel_Banners_v7_White_box_x720.jpg?v=16833740420637382474" alt="" />
                <div>
                <div className='ASHWAGANDHA-s'>ASHWAGANDHA</div>
                <p className='line-s'>A star performer for stress and energy in a</p>
                <p className='line2-s'>potent, organic caplet.</p>
                <button className='button-s' onClick={()=>Navigate("/Shop")}>SHOP NOW</button>
                </div>
              </div>
            </div>
              <h1 className='shoph1'>Shop By Category</h1>
            <div className='category-data'>
    {/* .................data mapping for Shop By Category data start here................ */}
                {
                  categoryData.map((item)=>{
                    return(
                    <div className=''onClick={(()=>Navigate("/Shop"))}>
                      <Link to='' className='link'>
                        <img src={item.img} alt="" className='category-img'/>
                        <h3>{item.title}</h3>
                        <p>{item.link}</p>
                      </Link>
                    </div>
                    )
                  })
                }
    {/* .................data mapping for Shop By Category data end here   ................ */}          
            </div>
            <h1 className='besth1'>Best Seller</h1>
            <div>
                <CartSlider/>
            </div>

            <div className='flower-div'>
              <div>
                <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/StressCareA-Main-647x1024.png?v=1591359475" alt="" />
              </div>
              <div className="details-div">
                <p className='p1'>Unlock the Wisdom of Herbs</p>
                <p className='p2'>With Herbal Supplements, Toothpaste & More!</p>
                <p className='p3'>Since 1930, Himalaya has been passionate about the healing wisdom of herbs.
                 We offer a wide range of clinically-studied herbal supplements, toothpaste and personal care products 
                 that unlock the powerful healing benefits of herbs.
                </p>
              </div>
            </div>
            <div>
              <Reviews/>
            </div>
            <div className='media'>
              <a href="https://www.instagram.com/himalayausa/" rel="noreferrer" target='_blank'><p>Follow us @himalayausa</p></a>
              
              <div className='social-media'>
                <a href="https://www.instagram.com/himalayausa/"  rel="noreferrer" target="_blank"><img src={instaLogo} alt="" className='insta-img'/></a>
                <a href="https://www.facebook.com/HimalayaUSA"  rel="noreferrer" target="_blank"><img src={facebookLogo} alt="" className='fb-img'/></a>
              </div>
            </div>
            <div className='main-insta-img'>
            {/* <div className='divforinsta'>
              {
                  mainData.map((item)=>( 
                    <div className='images-insta2'>
                      <img src={item.images.low_resolution.url} alt="logo" className='instaImages2' />
                      <img src={instagram} alt="" className='instahover3'/>
                    </div>
                  ))
              }
              </div> */}
            </div>
            {/* <div className='insta-div-home'> */}
              <Instagram/>
            {/* </div> */}
        </div>
    </div>
  )
}
export default Home