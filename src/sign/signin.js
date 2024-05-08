




import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";
import './sigin.css';
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const nav = useNavigate();

   const submit = async (e) => {
      if(e){
         e.preventDefault();
      }

      // Check if email and password are provided
      if (!email || !pass) {
         alert("Please fill in both email and password before logging in.");
         return;
      }

      try {
         const userCredential = await signInWithEmailAndPassword(auth, email, pass);
         const user = userCredential.user;
         if (user) {
            alert("Login successful");
            // Navigate only if login is successful
            nav('/');
         }
      } catch (error) {
         alert(error.message);
      }
   };

   return (
      <>
         <div className="main_container_register">
            <div className="header">
               <h2>Registration</h2>
            </div>

            <div className="box">
               <input type="text" name="Email-id" value={email} placeholder="enter email-id" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="box">
               <input type="password" name="password" value={pass} placeholder="password" onChange={(e) => setPass(e.target.value)} />
            </div>

            {/* <p>Don't have an account? <Link to="/login">Create Account</Link></p> */}
            <p style={{ color: "white" }}>Don't have an account? <Link to="/login">Create Account</Link></p>

           
            <button onClick={submit}>Login</button>
         </div>
      </>
   );
};

export default SignIn;

