import React from 'react'
import { Foot, FootFirstSection, FootLastSection, FootSecondSection } from './Footer.styled'
import styles from "./Foot.module.css" 
import facebook from "./facebook.png" 
import twitter from "./twitter.png" 
import instagram from "./instagram.png" 
import youtube from "./youtube.png" 


const Footer = () => {
  return (
    <Foot>
         <FootFirstSection>
            <div className={styles.footSectionDiv}>
                <h3>Info</h3>
                <p>Contact Us</p>
                <p>FAQ</p>
                <p>Blog</p>
                <p>Store Locator</p>
                <p>Careers</p>
            </div>
            <div className={styles.footSectionDiv}>
                <h3>Policies</h3>
                 <p>Shipping & Returns</p>
                 <p> Terms & Conditions</p>
                 <p>Privacy</p>
                 <p>CCPA</p>
                 <p>Accessibility</p>
            </div>
            <div className={styles.footSectionDiv}>
                <h3>Contact Us</h3>
                <h4>Email: <br />
                <span style={{color:"#aba"}}>writetous@himalayausa.com</span></h4>
                <h4>Phone: <br />
                <span style={{color:"#aba"}}>1-800-869-4640</span> <br />
                <span style={{color:"black",fontWeight:"20" }}>Mon-Fri, 8am-5pm CT</span></h4>
                <h4>Mail<br />
                <span style={{color:"black",fontWeight:"20" }}>Himalaya Wellness</span> <br />
                <span style={{color:"#aba"}}>1101 Gillingham Lane
                                            Sugar Land, TX 77478​</span> <br />
                </h4>
            </div>
            <div className={styles.footSectionDiv}>
              <h3 className={styles.footabove}>Subscribe to Our Newsletter!</h3>
              <input type="text" placeholder='Enter your Email' style={{height:"30px",width:"80%" }} className={styles.footerinp}/>
              <p>By entering your email, you agree to our Terms & Conditions and Privacy Policy.</p>
              <span style={{fontWeight:"700",fontSize:"20px"}}>Follow us:
              <a href='https://www.facebook.com/HimalayaUSA' target={"_blank"}><img className={styles.icon} src={facebook} alt="facebook" /></a>
              <a href="https://twitter.com/HimalayaUSA" target={"_blank"}><img className={styles.icon} src={twitter} alt="twitter" /></a>
              <a href="https://www.instagram.com/himalayausa/" target={"_blank"}><img className={styles.icon} src={instagram} alt="instagram" /></a>
              <a href="https://www.youtube.com/user/MyHimalayaUSA" target={"_blank"}><img className={styles.icon} src={youtube} alt="youtube" /></a>
              </span>
            </div>
         </FootFirstSection>
        <FootSecondSection>
          © 2022 Himalaya Wellness. All rights reserved.
        </FootSecondSection>
        <FootLastSection>
          *THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE.
        </FootLastSection>
    </Foot>
  )
}

export default Footer