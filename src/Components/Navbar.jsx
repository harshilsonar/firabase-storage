import { signOut } from 'firebase/auth';
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Service/firebase';


const Navbar = () => {

  return (
    <div style={{ backgroundColor: "whitesmoke", width: "100%", display: "flex", justifyContent: "space-around", padding: "20px" }}>
      <li style={{ listStyle: "none" }}><Link to={"/"} style={{ textDecoration: "none", color: "black" }}>Home</Link></li>
      <li style={{ listStyle: "none" }}><Link to={"/dashboard"} style={{ textDecoration: "none", color: "black" }}>Dashboard</Link></li>
      <li style={{ listStyle: "none" }}><Link to={"/signin"} style={{ textDecoration: "none", color: "black" }}>Sign in</Link></li>
      <li style={{ listStyle: "none" }}><Link to={"/signup"} style={{ textDecoration: "none", color: "black" }}>Sign Up</Link></li>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  )
}

export default Navbar