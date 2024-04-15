import React, { useState,useEffect } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import './register.css';
import { Link } from "react-router-dom";



const Register = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const [confirmpass, setConfirmpass] = useState('');
   const [isLoggedIn, setIsLoggedIn] = useState(false);
 


   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         setIsLoggedIn(!!user);
      });

      return () => {
         unsubscribe();
      };
   }, []);

   const submit = async (e) => {
      e.preventDefault();
      try {
       
         const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
         const user = userCredential.user;
         if (user) {
            alert("Account created successfully");
            // history.push("/signin");
         }
      } catch (error) {
         alert(error.message);
      }
   };

   return (
      <>
       {!isLoggedIn && (
         <div className="main_container_register">
            <div className="header">
               <h2>Registration</h2>
            </div>

            <div className="box">
               <input type="text" name="username" value={name} placeholder="enter your name" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="box">
               <input type="text" name="Email-id" value={email} placeholder="enter email-id" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="box">
               <input type="password" name="password" value={pass} placeholder="password" onChange={(e) => setPass(e.target.value)} />
            </div>

            <div className="box">
               <input type="password" name="confirm password" value={confirmpass} placeholder="confirm password" onChange={(e) => setConfirmpass(e.target.value)} />
            </div>

            <p>Already have an account? <Link to="/signin">Login now</Link></p>
            <button onClick={submit}>Register</button>
         </div>
          )}
      </>
   );
};

export default Register;

