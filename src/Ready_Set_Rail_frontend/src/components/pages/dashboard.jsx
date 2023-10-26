import React from "react";
import "../css/dashboard.css";
import Navbar from "./navbar";
import BookForm from "./book_form";

function Dashboard() {
    return (
        
        <div>
            <Navbar />

            <div className="comp">
                <div className="main-title">
                    <h1>
                        <span id="one">Ready</span>
                        <span id="two">Set</span>
                        <span id="thr">Rail</span>
                    </h1>

                    <h2>
                        <span>Embark on a journey of comfort and convenience</span>
                        <span>with our seamless train ticket booking experience.</span>
                    </h2>
                </div>

                <div className="bookform">
                    <BookForm />
                </div>
            </div>

        </div >
    )
};

export default Dashboard;