import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CardSc from './components/CardSc.jsx'
import Hometext from './components/hometext.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div className="caret-transparent">
      <Header/>
      <Hero/>
      <Hometext/>
      <CardSc/>
      <Footer/>
    </div>
  )
}

export default App
