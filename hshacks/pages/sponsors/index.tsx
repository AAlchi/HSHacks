import React from 'react' 
import Header from '../components/global/header/Header'
 import Footer from '../components/global/footer/Footer'
import SponsorLanding from '../components/sponsorpage_component/sponsors/landing/SponsorLanding' 
import FAQ from '../components/sponsorpage_component/faq/FAQ'

const index = () => {
  return (
    <div>
      <Header /> 
      <SponsorLanding />
      <FAQ />
      <Footer />
    </div>
  )
}

export default index