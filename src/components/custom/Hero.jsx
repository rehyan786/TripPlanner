import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[60px] text-center'>Explore the destintion with Us</h1>
       <Link to={'/create-trip'}>
         <Button>Get Started</Button>
       </Link>
    </div>
  )
}

export default Hero