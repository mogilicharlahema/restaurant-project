// import React, { useReducer } from "react";
// import BookingForm from "./BookingForm";

// const initialState = {
//   availableTimes: ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30"],
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "UPDATE_TIMES":
//       // logic to update available times based on the date
//       return { ...state, availableTimes: action.payload };
//     default:
//       return state;
//   }
// }

// const ParentComponent = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     console.log("Available times in ParentComponent:", state.availableTimes);
//   }, [state.availableTimes]);

//   const submitForm = (formData) => {
//     console.log("Form submitted with data:", formData);
//   };

//   return (
//     <div>
//       <BookingForm
//         availableTimes={state.availableTimes}
//         submitForm={submitForm}
//       />
//     </div>
//   );
// };

// export default ParentComponent;
