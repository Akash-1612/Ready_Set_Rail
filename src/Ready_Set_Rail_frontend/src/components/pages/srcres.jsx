import { Ready_Set_Rail_backend } from "../../../../declarations/Ready_Set_Rail_backend";

import React from "react";
import "../css/srcres.css";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookTicket from "./bookticket";

const SearchResult = () => {

    const navigate = useNavigate();
    const [showList, setShowList] = useState([]);
    const [tick, setTick] = useState(false);

    useEffect(() => {
        async function fetTrLis() {
            const trnList = await Ready_Set_Rail_backend.trnlis();
            setShowList(trnList);
        } fetTrLis();
    }, []);

    const bookTick = async (event) => {
        event.preventDefault();
        setTick(true);
    }

    return (

        <div className="result">
            <Navbar />

            <div className="search-title">
                <h1>Search Result</h1>
            </div>

            <div className="userInput">

            </div>


            <div id="train-container">
                <div className="detail-lists">
                    <ol>
                        {showList.map((item, index) => (
                            <li key={index}>{item}
                                <button type="submit" className="book-ticket-button" onClick={bookTick}>Book Ticket</button></li>
                        ))}
                    </ol>
                </div>
            </div>

            <div>
                {tick && <BookTicket onClose={() => setTick(false)} />}
            </div>


        </div>
    )
};

export default SearchResult;