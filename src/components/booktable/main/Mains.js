// import React, { useReducer } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import Booking from "./Booking";
// import ConfirmedBooking from "./ConfirmedBooking";

// const Mains = () => {
//   const seedRandom = (seed) => {
//     var m = 2 ** 35 - 31;
//     var a = 185852;
//     var s = seed % m;
//     return function () {
//       return (s = (s * a) % m) / m;
//     };
//   };

//   const fetchAPI = (date) => {
//     let result = [];
//     let random = seedRandom(date.getDate());
//     for (let i = 17; i <= 23; i++) {
//       if (random() < 0.5) {
//         result.push(i + ":00");
//       }
//       if (random() > 0.5) {
//         result.push(i + ":30");
//       }
//     }
//     return result;
//   };

//   const submitAPI = (formData) => {
//     return true;
//   };

//   const initialState = { availableTimes: fetchAPI(new Date()) };

//   function updateTimes(state, action) {
//     if (action.type === "UPDATE_TIMES") {
//       return { availableTimes: fetchAPI(new Date(action.payload)) };
     
//     }
//     return state;
//   }

//   const [state, dispatch] = useReducer(updateTimes, initialState);

//   const navigate = useNavigate();
//   const submitForm = (formData) => {
//     if (submitAPI(formData)) {
//       navigate("/confirmed");
//     }
//   };

//   return (
//     <main>
//       <Routes>
//         <Route 
//           path="/Booking" 
//           element={
//             <Booking 
//               availableTimes={state.availableTimes} 
//               dispatch={dispatch} 
//               submitForm={submitForm} 
//             />
//           } 
//         />
//         <Route path="/confirmed" element={<ConfirmedBooking />} />
//       </Routes>
//     </main>
//   );
// };

// export default Mains;
