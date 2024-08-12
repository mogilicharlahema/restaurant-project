// import React, { useState, useEffect } from "react";
// import { onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebaseconfig";
// import './register.css';
// import { Link, useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2';

// const Register = () => {
//    const [name, setName] = useState('');
//    const [email, setEmail] = useState('');
//    const [pass, setPass] = useState('');
//    const [confirmpass, setConfirmpass] = useState('');
//    const [isLoggedIn, setIsLoggedIn] = useState(false);
//    const navigate = useNavigate();

//    useEffect(() => {
//       const unsubscribe = onAuthStateChanged(auth, (user) => {
//          setIsLoggedIn(!!user);
//       });

//       return () => {
//          unsubscribe();
//       };
//    }, []);

//    const submit = async (e) => {
//       e.preventDefault();

//       if (!name || !email || !pass || !confirmpass) {
//          Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Please enter all the fields!',
//          });
//          return;
//       }

//       if (pass !== confirmpass) {
//          Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Passwords do not match!',
//          });
//          return;
//       }

//       try {
//          const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
//          const user = userCredential.user;
//          if (user) {
//             Swal.fire({
//                icon: 'success',
//                title: 'Success!',
//                text: 'Account created successfully!',
//             }).then(() => {
//                navigate("/login");
//             });
//          }
//       } catch (error) {
//          Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: error.message,
//          });
//       }
//    };

//    return (
//       <>
//          {/* { {!isLoggedIn && (} */}
//          <div className="main_container_register">
//             <div className="header">
//                <h2 style={{ color: "wheat" }}>Registration</h2>
//             </div>

//             <div className="box">
//                <input type="text" name="username" value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
//             </div>

//             <div className="box">
//                <input type="text" name="Email-id" value={email} placeholder="Enter email-id" onChange={(e) => setEmail(e.target.value)} />
//             </div>

//             <div className="box">
//                <input type="password" name="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
//             </div>

//             <div className="box">
//                <input type="password" name="confirm password" value={confirmpass} placeholder="Confirm password" onChange={(e) => setConfirmpass(e.target.value)} />
//             </div>

//             <p style={{ color: "white" }}>Already have an account? <Link to="/login">Login now</Link></p>

//             <button onClick={submit}>Register</button>
//          </div>
//          {/* //  )} */}
//       </>
//    );
// };

// export default Register;



// import React, { useState, useEffect } from "react";
// import { onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "../../firebaseconfig";
// import './register.css';
// import { Link, useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2';

// const Register = () => {
//    const [name, setName] = useState('');
//    const [email, setEmail] = useState('');
//    const [pass, setPass] = useState('');
//    const [confirmpass, setConfirmpass] = useState('');
//    const [isLoggedIn, setIsLoggedIn] = useState(false);
//    const navigate = useNavigate();

//    useEffect(() => {
//       const unsubscribe = onAuthStateChanged(auth, (user) => {
//          setIsLoggedIn(!!user);
//       });

//       return () => {
//          unsubscribe();
//       };
//    }, []);

//    const submit = async (e) => {
//       e.preventDefault();

//       if (!name || !email || !pass || !confirmpass) {
//          Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Please enter all the fields!',
//          });
//          return;
//       }

//       if (pass !== confirmpass) {
//          Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Passwords do not match!',
//          });
//          return;
//       }

//       try {
//          // Create user with email and password
//          const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
//          const user = userCredential.user;

//          if (user) {
//             // Update user's profile with the display name
//             await updateProfile(user, { displayName: name });

//             Swal.fire({
//                icon: 'success',
//                title: 'Success!',
//                text: 'Account created successfully!',
//             }).then(() => {
//                navigate("/login"); // Navigate to login after successful registration
//             });
//          }
//       } catch (error) {
//          Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: error.message,
//          });
//       }
//    };

//    return (
//       <div className="main_container_register">
//          <div className="header">
//             <h2 style={{ color: "wheat" }}>Registration</h2>
//          </div>

//          <div className="box">
//             <input
//                type="text"
//                name="username"
//                value={name}
//                placeholder="Enter your name"
//                required="enter lessthan 6 characters"
//                onChange={(e) => setName(e.target.value)}
//             />
//          </div>

//          <div className="box">
//             <input
//                type="text"
//                name="Email-id"
//                value={email}
//                placeholder="Enter email-id"
//                onChange={(e) => setEmail(e.target.value)}
//             />
//          </div>

//          <div className="box">
//             <input
//                type="password"
//                name="password"
//                value={pass}
//                placeholder="Password"
//                onChange={(e) => setPass(e.target.value)}
//             />
//          </div>

//          <div className="box">
//             <input
//                type="password"
//                name="confirm password"
//                value={confirmpass}
//                placeholder="Confirm password"
//                onChange={(e) => setConfirmpass(e.target.value)}
//             />
//          </div>

//          <p style={{ color: "white" }}>Already have an account? <Link to="/login">Login now</Link></p>

//          <button onClick={submit}>Register</button>
//       </div>
//    );
// };

// export default Register;


import React, { useState, useEffect } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import './register.css';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Register = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const [confirmpass, setConfirmpass] = useState('');
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [nameError, setNameError] = useState('');
   const navigate = useNavigate();

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

      // Validate name length
      if (name.length > 6) {
         setNameError('Please enter less than 6 characters');
         return;
      } else {
         setNameError(''); // Clear error if valid
      }

      if (!name || !email || !pass || !confirmpass) {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter all the fields!',
         });
         return;
      }

      if (pass !== confirmpass) {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Passwords do not match!',
         });
         return;
      }

      try {
         // Create user with email and password
         const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
         const user = userCredential.user;

         if (user) {
            // Update user's profile with the display name
            await updateProfile(user, { displayName: name });

            Swal.fire({
               icon: 'success',
               title: 'Success!',
               text: 'Account created successfully!',
            }).then(() => {
               navigate("/login"); // Navigate to login after successful registration
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
      <div className="main_container_register">
         <div className="header">
            <h2 style={{ color: "wheat" }}>Registration</h2>
         </div>

         <div className="box">
            <input
               type="text"
               name="username"
               value={name}
               placeholder="Enter your name"
               onChange={(e) => setName(e.target.value)}
            />
            {nameError && <span className="error-message">{nameError}</span>}
         </div>

         <div className="box">
            <input
               type="text"
               name="Email-id"
               value={email}
               placeholder="Enter email-id"
               onChange={(e) => setEmail(e.target.value)}
            />
         </div>

         <div className="box">
            <input
               type="password"
               name="password"
               value={pass}
               placeholder="Password"
               onChange={(e) => setPass(e.target.value)}
            />
         </div>

         <div className="box">
            <input
               type="password"
               name="confirm password"
               value={confirmpass}
               placeholder="Confirm password"
               onChange={(e) => setConfirmpass(e.target.value)}
            />
         </div>

         <p style={{ color: "white" }}>Already have an account? <Link to="/login">Login now</Link></p>

         <button onClick={submit}>Register</button>
      </div>
   );
};

export default Register;
