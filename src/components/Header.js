import React from 'react'
import { LOGO, USER_AVATAR } from '../utils/constant'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandleSignOut = ()=>{
  signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
}
useEffect(()=>{

 const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email, displayName,photoURL} = user;
  dispatch(addUser(
    {
        uid : uid,
        email : email,
        displayName : displayName,
        photoURL : photoURL
  }));
  navigate("/browse");
} else {
  // User is signed out
  // ...
  dispatch(removeUser());
  navigate("/");
}
});

// unsubscribe when component will unmount
return () => unsubscribe();
},[]);

  return (
    <div className="absolute w-screen flex justify-between  flex-row pt-4 bg-gradient-to-r from-black z-10">
      <div className="flex">
        <div className="text-6xl font-thin text-red-600 pt-4 pl-8">AI
        </div>
        <div>
            <img className="w-60" src={LOGO} alt="logo"/>
        </div>
        </div>
        { user && 
        (<div className="flex pr-10">
          <img
          className="w-12 h-12"
          alt=""
          src={user?.photoURL === null ?  USER_AVATAR : user.photoURL}
          />
          <button className="font-bold text-white" onClick={HandleSignOut}>(Sign Out)</button>
        </div>
        )
        }
    </div>
  )
}

export default Header