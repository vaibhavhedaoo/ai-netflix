import React, { useState } from 'react'
import Header from './Header';
import { BG_URL } from '../utils/constant';

const Login = () => {
  const [isSignInForm,SetIsSignInForm] =useState(true);
  const toggleSignInForm =() =>{
    SetIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src={BG_URL} alt="Background" />
      </div>
      <form className="absolute p-12 bg-black w-3/12 h-1/2 my-80 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80" >
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && (
        <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>
        )}
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to NetFlix? Sign UP Now" : "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  )
};

export default Login;