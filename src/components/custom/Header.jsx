import React from 'react'
import { Button } from '../ui/button'

export default function Header() {
  return (
    <div className='p-3 flex items-center justify-between px-6'>
         <img src='/'/>
         <div>
            <Button>Sign up</Button>
         </div>
    </div>
  )
}
