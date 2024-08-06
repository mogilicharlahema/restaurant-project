import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig"; 
import './signin.css'; 
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const SignInComponent = () => {
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const nav = useNavigate();

   const submit = async (e) => {
      if (e) e.preventDefault();

      if (!email || !pass) {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in both email and password before logging in.',
         });

         return;
      }

      try {
         const userCredential = await signInWithEmailAndPassword(auth, email, pass);
         const user = userCredential.user;
         if (user) {
            Swal.fire({
               icon: 'success',
               title: 'Login successful',
               text: 'You have successfully logged in!',
            }).then(() => {
               nav('/');
            });
         }
      } catch (error) {
         Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message,
         });
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


