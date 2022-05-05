import React from 'react'
import "./navbar.css"
import { Link, NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <div>
        <div className='top_nav'>
            <span className='top_nav_data'>FREE SHIPPING </span>
            ON ALL ORDERS OVER $35
        </div>
        <nav className='wrapper'>
            <div className='logo'>
                <img src="https://leap.himalayawellness.com/IOD/Content/images/login/header_logo.png" alt="" />
            </div>
            
            <div className='nav-links'>
                <div>
                    <Link to="/Shop" className='LINK'>Shop</Link>
                    <div className='mega-box'>
                        <div className='data'>
                            <div className='content'>
                                <div className='row'>
                                    <header>Hearbal Suppliments</header>
                                    <div className='mega-links'>
                                        <div>
                                            <NavLink to='' className='Link'>Single Herb Suppliments</NavLink>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Multi-Ingredient Suppliments</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <header>Oral Care</header>
                                    <div className='mega-links'>
                                        <div>
                                            <Link to='' className='Link'>Adult Toothpaste</Link>
                                        </div>
                                        <div>
                                            <Link to='' className='Link'>Kids Toothpaste</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <header>Presonal Care</header>
                                    <div className='mega-links'>
                                        <div>
                                            <Link to='' className='Link'>Face Care</Link>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Cleansing bars</Link>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Balm</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='content'>
                                <div className='row'>
                                    <header>Health Interests</header>
                                    <div className='mega-links'>
                                        <div>
                                            <Link to='' className='Link'>Blood Sugar</Link>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Barin & Cognitive</Link>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Digestion</Link>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Energy & Vitality</Link>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Hair, Skin & Nails</Link>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Heart & Cardio</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <header>
                                        <br />
                                    </header>
                                    <div className='mega-links'>
                                        <div>
                                            <Link to='' className='Link'>Immune Support</Link>
                                        </div>
                                        <div>
                                            <Link to='' className='Link'>Joint & Mobility</Link>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Liver & Cleanse</Link>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Men's Wellness</Link>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Respiratory</Link>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Sleep</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <header>
                                    <br />
                                    </header>
                                    <div className='mega-links'>
                                        <div>
                                            <Link to='' className='Link'>Stress & Mood</Link>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Urinary</Link>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Weight Management</Link>
                                        </div>
                                        <div>
                                        <Link to='' className='Link'>Women's Wellness</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1607451904" alt="" className='img'/>
                            <br />
                            <button className='btn'>Feature Product</button>
                            <p className='p'>Find Out Why everyone loves best selling Organic Ashwagandha</p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <Link to="/About" className='LINK'>About</Link>
                <Link to='/Store Locator' className='LINK'>Store Locator</Link>
            </div>
            <div className='icons'>
                <img src="https://www.linkpicture.com/q/search_9.png" alt="" />
                <img src="https://www.linkpicture.com/q/userlogo.png" alt="" />
                <img src="https://www.linkpicture.com/q/shopping-bag.png" alt="" />
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar