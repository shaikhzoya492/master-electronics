import React from 'react'
import TopBar from "./components/TopBar"
import NavBar from './components/NavBar'
import Home from './components/Home'
import Brands from './components/Brands'
import Services from './components/Services'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from'./components/Footer'
import Faq  from './components/Faq'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <>
      <div className='w-full min-h-screen font-roboto'>
         <TopBar/>
        <div className="sticky top-0 z-50">
          
            <NavBar/>
        </div>
        
       
        <main >
            <section id="home" className="scroll-mt-98 md:scroll-mt-40">
              <Home/>
            </section>

            <section id="services" className="scroll-mt-88 md:scroll-mt-40">
            <Brands/>
            </section>

           
              <Services/>
            

            <section id="aboutus" className="scroll-mt-32 md:scroll-mt-40">
              <About/>
            </section>

            <section id="reviews" className="scroll-mt-32 md:scroll-mt-40">
              <Reviews/>
            </section>

            <section id="contactus" className="scroll-mt-18 md:scroll-mt-40">
              <Contact/>
              <ContactForm/>
            </section>
            <Faq/>
        </main>

        <Footer/>
      </div>
    </>
  )
}

export default App