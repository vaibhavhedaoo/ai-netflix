import React, { useRef, useState } from 'react'
import Header from './Header';
import { BG_URL } from '../utils/constant';
import {checkValideData} from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm,SetIsSignInForm] =useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm =() =>{
    setErrorMessage(null);
    SetIsSignInForm(!isSignInForm);
  }
 
  const HandleButtonClick = () =>{
    // validate the form data
      const message = checkValideData(email.current.value,password.current.value);
      setErrorMessage(message);
      if(message) return;

      //sign in or sign up
      if(!isSignInForm)
      {
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
              // Signed up 
            const user = userCredential.user;
            console.log(user);
            updateProfile(auth.currentUser, {
              displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/27008048?s=400&u=8f157102126adb4daf4f6937a017893856fc4a73&v=4"
            }).then(() => {
              // Profile updated!
              const {uid,email, displayName,photoURL} = auth.currentUser;
              dispatch(addUser(
                {
                    uid : uid,
                    email : email,
                    displayName : displayName,
                    photoURL : photoURL
              }));
              navigate("/browse");  
            }).catch((error) => {
              // An error occurred
              // ...
            });
            

        })
          .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ " - "+errorMessage)
              });
      }
      else{
        //signin
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+ " - " +errorMessage);
        });
        }

  }




  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src={BG_URL} alt="Background" />
      </div>
      <form onSubmit={(e)=>{e.preventDefault()}} className="absolute p-12 bg-black w-3/12 h-1/2 my-80 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80" >
       
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && (
        <input type="text" placeholder="Full Name" ref={name} className="p-4 my-4 w-full bg-gray-700"/>
        )}
        <input type="text" placeholder="Email Address" ref={email} className="p-4 my-4 w-full bg-gray-700"/>
        <input type="password" placeholder="Password"  ref={password} className="p-4 my-4 w-full bg-gray-700"/>
        <p className="p-2 text-lg text-red-700 font-bold">{errorMessage}</p>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={HandleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to NetFlix? Sign UP Now" : "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  )
};

export default Login;