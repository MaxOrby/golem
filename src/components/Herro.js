import React from 'react'
import Nav from './Nav'
import { StaticImage } from 'gatsby-plugin-image'

export default function Herro() {
    return (
        <header>
        <Nav />
        <div className="container">
             <div className="header_content">
                 <div className="header_content__item header_content__info">
                    <h1>ILLIA GOLEM</h1>
                    <p>
                        You are welcome on my personal website. My name is ILLia GOLEM. 
                        All my life I devoted to the study of the basics of nutrition, training and biomechanics. First of all, I check all my knowledge and skills on myself 
                        and therefore I was able, through trials and mistakes, to achieve what 
                        I have today. 
                    </p>
                
                    <button className="btn_play"> <i>play</i></button>  
                </div>
                    
                <div className="header_content__item header_content__img">
        <StaticImage
            src = "../images/illia_golem.png"
            width={658}
            height={592}
            alt="Illia Golem"
        />
        </div>
                    
                   
            </div>

 
    </div>
    </header>
    )
}
