import React from 'react' 
import Header from '../components/global/header/Header'
 import Footer from '../components/global/footer/Footer'
import SponsorLanding from '../components/sponsorpage_component/sponsors/landing/SponsorLanding' 
import FAQ from '../components/sponsorpage_component/faq/FAQ'
import Head from 'next/head'

const index = () => {
  return (
    <div>
      <Head>
        <title>HSHacks - Sponsors</title>
        <link rel="icon" href="/HSHacks_Icon.png" />
      </Head>
      <Header /> 
      <SponsorLanding />
      <FAQ />
      <Footer />
    </div>
  )
}

export default index