import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig"; // Adjust the path to the correct location
import './signin.css'; // Corrected the filename
import { Link, useNavigate } from "react-router-dom";

const SignInComponent = () => {
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const nav = useNavigate();

   const submit = async (e) => {
      if (e) e.preventDefault();

      if (!email || !pass) {
         alert("Please fill in both email and password before logging in.");
         return;
      }

      try {
         const userCredential = await signInWithEmailAndPassword(auth, email, pass);
         const user = userCredential.user;
         if (user) {
            alert("Login successful");
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
               <h2>Sign In</h2>
            </div>

            <div className="box">
               <input type="text" name="Email-id" value={email} placeholder="Enter email-id" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="box">
               <input type="password" name="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
            </div>

            <p style={{ color: "white" }}>Don't have an account? <Link to="/register">Create Account</Link></p>

            <button onClick={submit}>Login</button>
         </div>
      </>
   );
};

export default SignInComponent;
