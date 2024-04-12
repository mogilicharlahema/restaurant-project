
// import React, { useState } from 'react';
// import './login.css';
// import { images } from '../../constants';
// import { useNavigate } from 'react-router-dom';


// const Login = () => {

//     const [action, setActionState] = useState("register");
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });

//     const nav  = useNavigate()

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleAction = (newAction, callback) => {
//         setActionState(newAction);
//         if (callback) {
//             callback();
//         }
//     };
    


//     const navigateToHome = ()=>{
//         nav('/')
//     }

//     const handleSubmit = () => {
//         console.log(formData,"fromdata")

//         // Here you can save the form data in local storage
//         localStorage.setItem('userData', JSON.stringify(formData));
//         // You can also perform further actions like sending the data to a server
//         alert("Registration successful! You can now login.");
//         handleAction("Login")
      
//        };

       

//     const handleSubmite = ()=>{

//         const userData = localStorage.getItem('userData');
//         console.log(userData.name,userData.email,"userdata");
//     if (userData.name===undefined||userData.password===undefined) {
//         // If user data doesn't exist, alert user to register first
//         alert("Please register first.");
//         return;
//     }
       
//         alert("Login successful! You can now login.");
//         nav('/')
//     }

//     return (
//         <div className='container'>
//             <div className='header'>
//                 <div className='text'>{action}</div>
//                 <div className='underline'></div>
//             </div>
//             <div className='inputs'>
//                 {action === "Login" ? null : (
//                     <div className='input'>
//                         <img src={images.person} alt='' />
//                         <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Enter Your Name' />
//                     </div>
//                 )}
//                 <div className='input'>
//                     <img src={images.email} alt='' />
//                     <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email-Id' />
//                 </div>
//                 <div className='input'>
//                     <img src={images.password} alt='' />
//                     <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Enter Password' />
//                 </div>
//             </div>
//             {action === "register" ? null : (
//                 <div className='forgot-password'>Forgot Password ?<span>Click here</span></div>
//             )}
//           <div className='submit-container'>
//     <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { handleAction("register", handleSubmit); }}>Register</div>
//     <div className={action === "register" ? "submit gray" : "submit"} onClick={() => { handleAction("Login", handleSubmite); }}>Login</div>
    
// </div>


//         </div>
//     );
// };

// export default Login;




// new code










