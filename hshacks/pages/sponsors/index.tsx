import React from 'react' 
import Header from '../components/global/header/Header'
 import Footer from '../components/global/footer/Footer'
import SponsorLanding from '../components/sponsorpage_component/sponsors/landing/SponsorLanding'

const index = () => {
  return (
    <div>
      <Header /> 
      <SponsorLanding />
      <Footer />
    </div>
  )
}

export default index