import React from 'react'
import Footer from './Footer'
import '../ style/global.css'
import Herro from './Herro'



export default function Layout({ children }) {
    return (
        <>
            <Herro />
           
            { children }
            <Footer/>
        </>
    )
}

//rfc
