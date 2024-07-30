// // import React, { useState } from "react";
// // import Swal from "sweetalert2";
// // import { useNavigate } from "react-router-dom";
// // import { collection, addDoc } from "firebase/firestore";
// // import { ref, uploadBytes } from "firebase/storage";
// // import db, { storage } from "../../../firebaseconfig";
// // import "./BookingForm.css";

// // const BookingForm = ({ submitForm, isAuthenticated }) => {
// //   const [date, setDate] = useState("");
// //   const [time, setTime] = useState("");
// //   const [guests, setGuests] = useState("");
// //   const [occasion, setOccasion] = useState("");
// //   const [notification, setNotification] = useState(""); // Add state for notification
// //   const navigate = useNavigate();

// //   const handleClick = async () => {
// //     if (!isAuthenticated) {
// //       setNotification("Please log in to make a reservation. Click here to register.");
// //       return;
// //     }

// //     if (date && time && guests && occasion) {
// //       const reservationData = {
// //         date,
// //         time,
// //         guests,
// //         occasion
// //       };

// //       try {
// //         // Save to Firestore
// //         const docRef = await addDoc(collection(db, "reservations"), reservationData);

// //         // Convert the data to JSON
// //         const jsonData = JSON.stringify(reservationData);

// //         // Create a Blob from JSON data
// //         const blob = new Blob([jsonData], { type: "application/json" });

// //         // Create a storage reference
// //         const storageRef = ref(storage, `reservations/${docRef.id}.json`);

// //         // Upload the Blob to Firebase Storage
// //         await uploadBytes(storageRef, blob);

// //         Swal.fire({
// //           icon: 'success',
// //           title: 'Booking Confirmed!',
// //           text: 'Your booking was confirmed.',
// //         }).then(() => {
// //           navigate('/'); // Redirect to the main UI after successful booking
// //         });
// //       } catch (error) {
// //         console.error('Error adding document: ', error);
// //         setNotification("Something went wrong while saving your reservation.");
// //       }
// //     } else {
// //       setNotification("Please fill in all the details!");
// //     }
// //   };

// //   const handleDateChange = (e) => {
// //     setDate(e.target.value);
// //   };

// //   const handleTimeChange = (e) => {
// //     setTime(e.target.value);
// //   };

// //   const handleGuestsChange = (e) => {
// //     setGuests(e.target.value);
// //   };

// //   const handleOccasionChange = (e) => {
// //     setOccasion(e.target.value);
// //   };

// //   const handleNotificationClick = () => {
// //     navigate('/register'); // Navigate to the registration page
// //   };

// //   return (
// //     <div className="bookingFormContainer">
// //       <form>
// //         <fieldset>
// //           <div className="form-group">
// //             <label htmlFor="book-date">Choose Date:</label>
// //             <input
// //               id="book-date"
// //               value={date}
// //               onChange={handleDateChange}
// //               type="date"
// //               required
// //               className="form-control"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="book-time">Choose Time:</label>
// //             <input
// //               id="book-time"
// //               value={time}
// //               onChange={handleTimeChange}
// //               type="time"
// //               required
// //               className="form-control"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="book-guests">Number of Guests:</label>
// //             <input
// //               id="book-guests"
// //               type="number"
// //               min="1"
// //               value={guests}
// //               onChange={handleGuestsChange}
// //               required
// //               className="form-control"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="book-occasion">Occasion:</label>
// //             <select
// //               id="book-occasion"
// //               value={occasion}
// //               onChange={handleOccasionChange}
// //               required
// //               className="form-control"
// //             >
// //               <option value="">Select an occasion</option>
// //               <option>Birthday</option>
// //               <option>Anniversary</option>
// //               <option>Get-together</option>
// //               <option>Official parties</option>
// //             </select>
// //           </div>
// //           <div>
// //             <button
// //               aria-label="Submit Reservation"
// //               type="button"
// //               onClick={handleClick}
// //               className="submitButton"
// //             >
// //               Make your Reservation
// //             </button>
// //           </div>
// //           {notification && (
// //             <div
// //               className="notification"
// //               onClick={notification.includes("Click here") ? handleNotificationClick : null}
// //               style={{ cursor: notification.includes("Click here") ? 'pointer' : 'default' }}
// //             >
// //               {notification}
// //             </div>
// //           )}
// //         </fieldset>
// //       </form>
// //     </div>
// //   );
// // };

// // export default BookingForm;


// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import { collection, addDoc } from "firebase/firestore";
// import { ref, uploadBytes } from "firebase/storage";
// import db, { storage } from "../../../firebaseconfig";
// import "./BookingForm.css";

// const BookingForm = ({ submitForm, isAuthenticated }) => {
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [guests, setGuests] = useState("");
//   const [occasion, setOccasion] = useState("");
//   const [name, setName] = useState(""); // New state for user name
//   const [email, setEmail] = useState(""); // New state for user email
//   const [notification, setNotification] = useState(""); // Add state for notification
//   const navigate = useNavigate();

//   const handleClick = async () => {
//     if (!isAuthenticated) {
//       setNotification("Please log in to make a reservation. Click here to register.");
//       return;
//     }

//     if (date && time && guests && occasion && name && email) {
//       const reservationData = {
//         date,
//         time,
//         guests,
//         occasion,
//         name,
//         email
//       };

//       try {
//         // Save to Firestore
//         const docRef = await addDoc(collection(db, "reservations"), reservationData);

//         // Convert the data to JSON
//         const jsonData = JSON.stringify(reservationData);

//         // Create a Blob from JSON data
//         const blob = new Blob([jsonData], { type: "application/json" });

//         // Create a storage reference
//         const storageRef = ref(storage, `reservations/${docRef.id}.json`);

//         // Upload the Blob to Firebase Storage
//         await uploadBytes(storageRef, blob);

//         Swal.fire({
//           icon: 'success',
//           title: 'Booking Confirmed!',
//           text: 'Your booking was confirmed.',
//         }).then(() => {
//           navigate('/'); // Redirect to the main UI after successful booking
//         });
//       } catch (error) {
//         console.error('Error adding document: ', error);
//         setNotification("Something went wrong while saving your reservation.");
//       }
//     } else {
//       setNotification("Please fill in all the details!");
//     }
//   };

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

//   const handleTimeChange = (e) => {
//     setTime(e.target.value);
//   };

//   const handleGuestsChange = (e) => {
//     setGuests(e.target.value);
//   };

//   const handleOccasionChange = (e) => {
//     setOccasion(e.target.value);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleNotificationClick = () => {
//     navigate('/register'); // Navigate to the registration page
//   };

//   return (
    
//     <div className="bookingFormContainer">
//       <h1 className="a">Booking Form </h1>
//       <form>
//         <fieldset>
//           <div className="form-group">
//             <label htmlFor="user-name">Name:</label>
//             <input
//               id="user-name"
//               value={name}
//               onChange={handleNameChange}
//               type="text"
//               placeholder="Enter Name"
//               required
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="user-email">Email:</label>
//             <input
//               id="user-email"
//               value={email}
//               onChange={handleEmailChange}
//               type="email"
//               placeholder="Enter E-mail"
//               required
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="book-date">Choose Date:</label>
//             <input
//               id="book-date"
//               value={date}
//               onChange={handleDateChange}
//               type="date"
//               required
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="book-time">Choose Time:</label>
//             <input
//               id="book-time"
//               value={time}
//               onChange={handleTimeChange}
//               type="time"
//               required
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="book-guests">Number of Guests:</label>
//             <input
//               id="book-guests"
//               type="number"
//               min="1"
//               value={guests}
//               onChange={handleGuestsChange}
//               required
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="book-occasion">Occasion:</label>
//             <select
//               id="book-occasion"
//               value={occasion}
//               onChange={handleOccasionChange}
//               required
//               className="form-control"
//             >
//               <option value="">Select an occasion</option>
//               <option>Birthday</option>
//               <option>Anniversary</option>
//               <option>Get-together</option>
//               <option>Official parties</option>
//             </select>
//           </div>
//           <div>
//             <button
//               aria-label="Submit Reservation"
//               type="button"
//               onClick={handleClick}
//               className="submitButton"
//             >
//               Make your Reservation
//             </button>
//           </div>
//           {notification && (
//             <div
//               className="notification"
//               onClick={notification.includes("Click here") ? handleNotificationClick : null}
//               style={{ cursor: notification.includes("Click here") ? 'pointer' : 'default' }}
//             >
//               {notification}
//             </div>
//           )}
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;


import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import db, { storage } from "../../../firebaseconfig";
import "./BookingForm.css";

const BookingForm = ({ submitForm, isAuthenticated }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState(""); // New state for user name
  const [email, setEmail] = useState(""); // New state for user email
  const [notification, setNotification] = useState(""); // Add state for notification
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!isAuthenticated) {
      setNotification("Please log in to make a reservation. Click here to register.");
      return;
    }

    if (date && time && guests && occasion && name && email) {
      const reservationData = {
        date,
        time,
        guests,
        occasion,
        name,
        email
      };

      try {
        // Save to Firestore
        const docRef = await addDoc(collection(db, "reservations"), reservationData);

        // Convert the data to JSON
        const jsonData = JSON.stringify(reservationData);

        // Create a Blob from JSON data
        const blob = new Blob([jsonData], { type: "application/json" });

        // Create a storage reference
        const storageRef = ref(storage, `reservations/${docRef.id}.json`);

        // Upload the Blob to Firebase Storage
        await uploadBytes(storageRef, blob);

        Swal.fire({
          icon: 'success',
          title: 'Booking Confirmed!',
          text: 'Your booking was confirmed.',
        }).then(() => {
          navigate('/'); // Redirect to the main UI after successful booking
        });
      } catch (error) {
        console.error('Error adding document: ', error);
        setNotification("Something went wrong while saving your reservation.");
      }
    } else {
      setNotification("Please fill in all the details!");
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNotificationClick = () => {
    navigate('/register'); // Navigate to the registration page
  };

  return (
    <div className="bookingFormBackground"> {/* Added container with background image */}
      <div className="bookingFormContainer">
        <form>
          <fieldset>
            <div className="form-group">
              <label htmlFor="user-name">Name:</label>
              <input
                id="user-name"
                value={name}
                onChange={handleNameChange}
                type="text"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="user-email">Email:</label>
              <input
                id="user-email"
                value={email}
                onChange={handleEmailChange}
                type="email"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={date}
                onChange={handleDateChange}
                type="date"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="book-time">Choose Time:</label>
              <input
                id="book-time"
                value={time}
                onChange={handleTimeChange}
                type="time"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                id="book-guests"
                type="number"
                min="1"
                value={guests}
                onChange={handleGuestsChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={handleOccasionChange}
                required
                className="form-control"
              >
                <option value="">Select an occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Get-together</option>
                <option>Official parties</option>
              </select>
            </div>
            <div>
              <button
                aria-label="Submit Reservation"
                type="button"
                onClick={handleClick}
                className="submitButton"
              >
                Make your Reservation
              </button>
            </div>
            {notification && (
              <div
                className="notification"
                onClick={notification.includes("Click here") ? handleNotificationClick : null}
                style={{ cursor: notification.includes("Click here") ? 'pointer' : 'default' }}
              >
                {notification}
              </div>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

