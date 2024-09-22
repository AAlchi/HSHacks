import React from 'react' 
import Header from '../components/global/header/Header' 
import CodeOfConductLanding from '../components/codeofconductpage_component/sponsors/landing/CodeOfConductLanding'
import Footer from '../components/global/footer/Footer'
import Head from 'next/head'

const index = () => {
  return (
    <div>
      <Head>
        <title>HSHacks - Code of Conduct</title>
        <link rel="icon" href="/HSHacks_Icon.png" />
      </Head>
      <Header /> 
      <CodeOfConductLanding /> 
      <Footer />
    </div>
  )
}

export default index