import React from 'react' 
import Header from '../components/global/header/Header'
 import Footer from '../components/global/footer/Footer'
import Head from 'next/head'
import RegisterationLanding from '../components/registeration_component/landing/RegisterationLanding'
// import Register from './register'
import { ToastContainer } from 'react-toastify'

const index = () => {
  return (
    <div className='background'>
      <Head>
        <title>HSHacks - Registration</title>
        <link rel="icon" href="/HSHacks_Icon.png" />
      </Head>
      <Header />   

      <ToastContainer /> 
      <RegisterationLanding />
      {/* <Register /> */}
      <Footer/>
    </div>
  )
}

export default index