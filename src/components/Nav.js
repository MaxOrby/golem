import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
//import SocialBlock from './SocialBlock'


const Nav = () => {
    return (
        <div id="top" className="container top_bar">
        
            <StaticImage
                src = "../images/5_percent.png"
                width={75}
                alt="5 percent logo"
                imgClassName={'logo'}
             />
  
          <nav className="top_nav">
              <a href="#antropometry">About me</a>
              <a href="#events">Events</a>
              <a href="#contact">Contact</a>
          </nav>
  
      
         
  
  
      </div>
    )
}

export default Nav
