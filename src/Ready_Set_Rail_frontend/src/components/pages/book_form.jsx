

import React from "react";
import "../css/bookform.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BookForm = () => {
    const navigate = useNavigate();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    // const [date, setDate] = useState();

    const handleSearch = (event) => {
        event.preventDefault();
        if(from && to) {
            navigate("./search-result");
        } else {
            alert("fill in the 'From' & 'To' fields");
        }
        
    }

    return (
        <div>

            <div className="form-container">
                <form className="search-form">
                    <div className="form-group1">
                        <label htmlFor="from">From</label>
                        <input type="text" id="from" name="from" placeholder="Boarding Station" required value={from} onChange={(event) => setFrom(event.target.value)}/>
                        <label htmlFor="to">To</label>
                        <input type="text" id="to" name="to" placeholder="Journey End" required value={to} onChange={(event) => setTo(event.target.value)}/>
                    </div>
                    <div className="form-group2">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="from" />
                    </div>
                    <div className="form-group3">
                        <label htmlFor="type">Type</label>
                        <select id="type" name="type">
                            <option value="general">General</option>
                            <option value="ladies">Ladies</option>
                            <option value="handicapped">Handicapped</option>
                        </select>
                        <label htmlFor="class">Class</label>
                        <select id="class" name="class">
                            <option value="AC">AC Tier 1</option>
                            <option value="AC2">AC Tier 2</option>
                            <option value="AC3">AC Tier 3</option>
                            <option value="sleeper">Sleeper</option>
                            <option value="chair-car">Chair Car</option>
                        </select>
                    </div>

                    <div className="btne">
                    <button className="btn v1" onClick={handleSearch}> Search </button>
                    </div>

                </form>
            </div>

        </div>
    )
};

export default BookForm;