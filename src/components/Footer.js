import React from 'react'


const Footer = () => {
    return (
        <footer>

        <div id="contact" className="container">
          <div className="footer_content">
             <div className="footer_coontent__item">
               <h2>You are just one step away from starting to make your dream a reality. </h2>
             </div>
             <div className="footer_coontent__item">
                <h3>Individual training</h3>
                <p>For more details please contact me</p>
   
                <form action="https://www.flexyform.com/f/fe15d70422e646ca579cf5192962db7dd58cbcbf" method="POST">
           <input type="text" name="Name" className="form_input" placeholder="Name *" required/>
           <input type="email" name="Email" className="form_input" placeholder="Email *" required/>
           <input type="text" name="Phone Number" className="form_input" placeholder="Phone Number *" required/>
           <textarea name="Message" placeholder="Message"></textarea>
           <button className="btn_send" type="submit">Send</button>
        </form>
   
            </div>
   
          </div>
         
        </div>
   
   
   
        <div className="footer_bottom">
          <div className="container">
            <span className="footer_bottom__copy">© 2021 ILLIA GOLEM</span>
            <div className="footer_bottom__info">
                
                        
                  <a href="#top" className="top_link"> Top</a>
            </div>
          </div>
        </div>
   
   

   
   
       </footer>
    )
}

export default Footer

