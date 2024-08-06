import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import db, { storage, auth } from "../../../firebaseconfig";
import "./BookingForm.css";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setName(user.displayName || "");
      } else {
        setIsAuthenticated(false);
        setName("");
        setEmail("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleClick = async () => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: "error",
        title: "Not Logged In",
        text: "Please log in to make a reservation.",
      }).then(() => {
        navigate("/login");
      });
      return;
    }

    if (date && time && guests && occasion && name && email) {
      const reservationData = {
        date,
        time,
        guests,
        occasion,
        name,
        email,
      };

      try {
        const docRef = await addDoc(collection(db, "reservations"), reservationData);

        const jsonData = JSON.stringify(reservationData);
        const blob = new Blob([jsonData], { type: "application/json" });
        const storageRef = ref(storage, `reservations/${docRef.id}.json`);
        await uploadBytes(storageRef, blob);

        Swal.fire({
          icon: "success",
          title: "Booking Confirmed!",
          text: "Your booking was confirmed.",
        }).then(() => {
          navigate("/");
        });
      } catch (error) {
        console.error("Error adding document: ", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong while saving your reservation.",
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Details",
        text: "Please fill in all the details!",
      });
    }
  };

  return (
    <div className="bookingFormBackground">
      <div className="bookingFormContainer">
        <form>
          <fieldset>
            <div className="form-group">
              <label htmlFor="user-name">Name:</label>
              <input
                id="user-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                className="form-control"
                disabled={isAuthenticated && name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="user-email">Email:</label>
              <input
                id="user-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setDate(e.target.value)}
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
                onChange={(e) => setTime(e.target.value)}
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
                onChange={(e) => setGuests(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
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
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
