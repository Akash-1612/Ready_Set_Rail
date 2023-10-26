import { Ready_Set_Rail_backend } from "../../../../declarations/Ready_Set_Rail_backend";

import React from "react";
import "../css/srcres.css";
import Navbar from "./navbar";
import { useState, useEffect } from "react";

const SearchResult = () =>  {

const [showList, setShowList] = useState([]);

useEffect(() => {
    async function fetTrLis() {
        const trnList = await Ready_Set_Rail_backend.trnlis();
        setShowList(trnList);
    } fetTrLis();
}, []);


    return (

        <div className="result">
            <Navbar />

            <div className="search-title">
                <h1>Search Result</h1>
            </div>
            <div id="train-container">

                <div className="detail-lists">
                    <ol>
                        {showList.map((item, index) => (
                            <li key={index}>{item}
                                <button className="book-ticket-button">Book Ticket</button></li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
};

export default SearchResult;