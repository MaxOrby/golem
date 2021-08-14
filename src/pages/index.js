import * as React from "react"
import Antropometry from "../components/Antropometry"
import Layout from "../components/Layout"
import Pr from "../components/Pr"
import Promo from "../components/Promo"
import System from "../components/System"


// markup

export default function Home() {
  return (
    <Layout>
      <Antropometry/>
      <Promo />
      <Pr/>
      <System />
    </Layout>
  )
}