import React from 'react'
import { LOGO } from '../utils/constant'

const Header = () => {
  return (
    <div className="absolute flex flex-row pt-4 bg-gradient-to-b from-black z-10">
        <div className="text-6xl font-thin text-red-600 pt-4 pl-8">AI
        </div>
        <div>
            <img className="w-60" src={LOGO} alt="logo"/>
        </div>
      
    </div>
  )
}

export default Header