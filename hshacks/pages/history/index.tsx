import React from 'react'
import Header from '../components/global/header/Header' 
import Footer from '../components/global/footer/Footer'
import HistoryLanding from '../components/historypage_component/landing/HistoryLanding'

const index = () => {
  return (
    <div>
      <Header />  
      <HistoryLanding />
      <Footer />
    </div>
  )
}

export default index