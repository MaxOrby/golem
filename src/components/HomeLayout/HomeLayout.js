
import React from 'react'
import Nav from '../Nav'
import { StaticImage } from 'gatsby-plugin-image'
import "./homelayout.module.css"



    const HomeLayout =({ children}) => {
    return (
        <div>
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
                    </div> 
                </div>

            <div className="header_content__item header_content__img">
            <StaticImage
                src = "../../images/illia_golem.png"
                width={658}
                height={592}
                alt="Illia Golem"
            />
            </div>
        </div>
        </header>
            
        <section className="promo">
            <StaticImage
                src = "../../images/poster_illia_golem.jpg"
                width={1500}
                height={748}
                alt="Illia Golem poster"
                imgClassName={'cover_img'}
            />
            <div className="content">
                <p>
                   I can confidently say that I am able to achieve outstanding results from each of my clients. 
                   And it doesn’t matter whether you just want to get in shape, or turn into a monster - I can make all your wishes 
                   and dreams come true.
               </p>
            </div>
        </section>

        <section className="system">
            <div className="system_item">
                <StaticImage
                src = "../../images/illiagolem-training.jpg"
                width={800}
                height={800}
                alt="Illia Golem traning"
                imgClassName={'cover_img'}
            />

        </div>

        <div className="system_item">
          <div className="content">
             <p>
               I have developed unique techniques that are my personal know-how and which you will not hear about anywhere. 
               In my work, I am committed to the result and I guarantee it to you. My services are for the elite, 
               I don’t give discounts, don’t arrange promotions. If you want to get a truly high-quality service from one of the best in this field, 
               then I’m here for you! 
             </p>
          </div>
        </div>

  
   </section>


            
        </div>
    )
}
