
// import React, { useState } from "react";
// import "./BookingForm.css";

// const BookingForm = () => {
//     const [date, setDate] = useState("");

//     const handleChange = (e) => {
//         setDate(e.target.value);
//     };

//     return (
//         <header>
//             <section>
//                 <form>
//                     <fieldset>
//                         <div>
//                             <label htmlFor="book-date">Choose Date</label>
//                             <input
//                                 id="book-date"
//                                 value={date}
//                                 onChange={(e) => handleChange(e)}
//                                 type="date"
//                                 required
//                             />
//                         </div>
//                     </fieldset>
//                 </form>
//             </section>
//         </header>
//     );
// };

// export default BookingForm;


import React, { useState } from "react";
import "./BookingForm.css";


const BookingForm = ({ availableTimes = [], dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, times, guests, occasion });
  };

  const handleChange = (e) => {
    setDate(e.target.value);
    dispatch(e.target.value);
  };

  return (
    <div className='bookingFormContainer'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="book-date">Choose Date</label>
            <input id="book-date" value={date} onChange={handleChange} type="date" required />
          </div>
          <div>
            <label htmlFor="book-time">Choose Time:</label>
            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
              <option value="">Select a time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="book-guests">Number of Guests:</label>
            <input id="book-guests" type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="book-occasion">Occasion</label>
            <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
              <option value="">Select an occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Get-together</option>
              <option>Official parties</option>
            </select>
          </div>
          <div>
            <input aria-label="On Click" type="submit" value="Make your Reservation" />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default BookingForm;

