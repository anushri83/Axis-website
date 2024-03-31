import React from 'react';
import Navbar from './navbar/Navbar.jsx';
import Hero from './hero/Hero.jsx';
import Below from './below/Below.jsx'
import Event from './events/Event.jsx'
import Footer from './footer/Footer.jsx'
import ImageSlider from './mageSlider/ImageSlider.jsx'
import Image1 from './assets/image1.png'
import Image2 from './assets/image2.png'
import Image3 from './assets/image3.png'
import Image4 from './assets/image4.png'
import Image5 from './assets/image5.png'
import './App.css'
  
const App = () => {
  return (
    
    <div>
      <Navbar />
      <Hero />
      <Below />
      <div className='heading'>Events</div>
      <Event imageUrl='/ra.jpeg'
        content="Robotics & Automation"/>
      <Event imageUrl="/ma.jpg"
        content="Machine Learning"/>
      <Event imageUrl="/cd.jpeg"
        content="Artificial intelligence"/>
      <Event imageUrl="/se.jpeg"
        content="Software & Electronics"/>
      <button className='work'>Work More</button>
      <div className='top'>Top Researchers</div><br/>
      <div className='ImageSlider'>
        <ImageSlider
          imageUrl={Image1}
          name="Andrew Ng"
        />
        <ImageSlider
          imageUrl={Image2}
          name="Fei-Fei Li"
        />
        <ImageSlider
          imageUrl={Image3}
          name="Andrej Karpathy"
        />
        <ImageSlider
          imageUrl={Image4}
          name="Demis Hassabis"
        />
        <ImageSlider
          imageUrl={Image5}
          name="Ian Goodfellow"
        />
     </div>
      <Footer />
    </div>
  )
}

export default App
