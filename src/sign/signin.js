import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";
import './sigin.css';
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
   // const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   // const [confirmpass, setConfirmpass] = useState('');

   const submit = async (e) => {
      if(e){
      e.preventDefault()
   }
      try {
       
         const userCredential = await signInWithEmailAndPassword(auth, email, pass);
         const user = userCredential.user;
         if (user) {
            alert("login successfully");
         }
      } catch (error) {
         alert(error.message);
      }
   };

   const nav=useNavigate()
 

   return (
      <>
         <div className="main_container_register">
            <div className="header">
               <h2>Registration</h2>
            </div>

            {/* <div className="box">
               <input type="text" name="username" value={name} placeholder="enter your name" onChange={(e) => setName(e.target.value)} />
            </div> */}

            <div className="box">
               <input type="text" name="Email-id" value={email} placeholder="enter email-id" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="box">
               <input type="password" name="password" value={pass} placeholder="password" onChange={(e) => setPass(e.target.value)} />
            </div>
{/* 
            <div className="box">
               <input type="password" name="confirm password" value={confirmpass} placeholder="confirm password" onChange={(e) => setConfirmpass(e.target.value)} />
            </div> */}

            <p>Don't have an account? <Link to="/login">Create Account</Link></p>
            {/* <button onClick={submit=()=>{nav('/')}}>Login</button>
             */}


<button onClick={() => {
   submit();
   nav('/');
}}>Login</button>

         </div>
      </>
   );
};

export default SignIn;

