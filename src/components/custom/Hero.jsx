import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[60px] text-center pt-20'>Explore the destintion with Us</h1>
      <p className='text-white pt-12 font-mono tracking-tight text-md'>Tourism connects us to new places, cultures, and unforgettable experiences. <br/> It’s a journey that inspires, supports local communities, and creates lasting memories.</p>
      <div className="typewriter"><h2>"JMD Tourism – Your gateway to unforgettable journeys and breathtaking destinations."</h2></div>
       <Link to={'/create-trip'}>
         <Button>Get Started</Button>
       </Link>
    </div>
  )
}

export default Hero