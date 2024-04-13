



import React, { useState } from "react";
import { Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Button } from "reactstrap";
import Table from "./table";

const Book = () => {
    const [totalTables, setTotalTables] = useState([]);

    // users selection
    const [selection, setSelection] = useState({
        table: {
            name: null,
            id: null
        },
        Date: new Date(),
        time: null,
        location: "Any location",
        size: 0
    });

    // users booking details
    const [booking, setBooking] = useState({
        name: "",
        phone: "",
        email: ""
    });

    // potential locations
    const [locations] = useState(["Any Location", "patio", "Inside", "Bar"]);
    const [times] = useState([
        "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"
    ]);

    // BASIC RESERVATION VALIDATION
    const [reservationError, setReservationError] = useState(false);

    const getDate = () => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
        const dateStr = months[selection.Date.getMonth()] + " " + selection.Date.getDate() + " " + selection.Date.getFullYear();
        let time = selection.time > 12 ? selection.time + 12 + ":00" : selection.time + ":00";
        const datetime = new Date(dateStr + " " + time);
        return datetime;
    };

    const getEmptyTables = () => {
        let tables = totalTables.filter(table => table.isAvailable); // Assuming isAvailable is defined somewhere
        return tables.length;
    };

    return (
        <div>
            <p>Booking page</p>
        </div>
    );
};

export default Book;
