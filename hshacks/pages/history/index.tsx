import React from 'react'
import Header from '../components/global/header/Header' 
import Footer from '../components/global/footer/Footer'
import HistoryLanding from '../components/historypage_component/landing/HistoryLanding'
import Summary from '../components/historypage_component/summary/Summary'
import Sponsors from '../components/historypage_component/sponsors/Sponsors'

const index = () => {
  return (
    <div>
      <Header />  
      <HistoryLanding />
      <Summary />
      <Sponsors/>
      <Footer />
    </div>
  )
}

export default index