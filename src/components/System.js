import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function System() {
    return (
        <section className="system">
        <div className="system_item">
            <StaticImage
            src = "../images/illiagolem-training.jpg"
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
    )
}
