import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/bookticket.css";

const BookTicket = ({ onClose }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        age: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCancel = () => {
        onClose();
    };

    const handleBook = () => {
        navigate("/pnr"); 
    };

    return (
        <div className="popup-container"> 
            <div className="popup">
                <h2>Book Ticket</h2>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                    </label>
                    <label>
                        age:
                        <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
                    </label>
                </form>
                <div className="button-container">
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleBook}>Book</button>
                </div>
            </div>
        </div>
    );
};

export default BookTicket;

