import React from "react";
import "../css/bookform.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Ready_Set_Rail_backend } from "../../../../declarations/Ready_Set_Rail_backend/index";


const BookForm = () => {
    const today = new Date().toISOString().split('T')[0];
    const navigate = useNavigate("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState(today);
    const [coach, setCoach] = useState("");
    const [coType, setCoType] = useState("");
   


    const [fromSugg, setFromSugg] = useState([]);
    const [isFromDropdownOpen, setFromDropdownOpen] = useState(false);

    const [toSugg, setToSugg] = useState([]);
    const [isToDropdownOpen, setToDropdownOpen] = useState(false);

    const [noFromStnFn, setNoFromStnFn] = useState(false);
    const [noToStnFn, setNoToStnFn] = useState(false);


    useEffect(() => {
        const stations = ['jalandhar', 'delhi', 'mumbai', 'bangalore', 'hyderabad', 'kolkata'];

        const filteredFromSugg = stations.filter(stations => stations.toLowerCase().includes(from.toLowerCase()));
        const filteredToSugg = stations.filter(stations => stations.toLowerCase().includes(to.toLowerCase()));


        if (filteredFromSugg.length === 0) {
            setNoFromStnFn(true);
        } else {
            setNoFromStnFn(false);
        }

        if (filteredToSugg.length === 0) {
            setNoToStnFn(true);
        } else {
            setNoToStnFn(false);
        }

        setFromSugg(filteredFromSugg);
        setToSugg(filteredToSugg);

    }, [from, to]);

    const handleSearch = async (event) => {
        event.preventDefault();

        const sending = [];

        sending.push(Ready_Set_Rail_backend.setFrom(from));
        sending.push(Ready_Set_Rail_backend.setTo(to));
        sending.push(Ready_Set_Rail_backend.setDate(date));

        await Promise.all(sending);



        if (from == to) {
            alert("Boarding Station & Destination cannot be same");
        }

        else if (from && to && date && !noFromStnFn && !noToStnFn) {
            navigate("./searchResult");
        } else {
            alert("Please Enter All the Details");
        }

    }

    return (
        <div className="search-form">
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td className="left-data">
                                <label htmlFor="" className="required-field">From :</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        placeholder="Boarding Station"
                                        required
                                        value={from}
                                        onChange={(e) => {
                                            setFrom(e.target.value);
                                            setFromDropdownOpen(true);
                                        }}
                                        onFocus={() => setFromDropdownOpen(true)}
                                    />
                                    {from && isFromDropdownOpen && (fromSugg.length > 0 || noFromStnFn) && (
                                        <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1, backgroundColor: 'white', border: '1px solid #ccc', width: '200px', textTransform: 'uppercase' }}>
                                            {noFromStnFn ? (<p style={{ padding: '8px' }} >No Stations Found </p>) : (
                                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                                    {fromSugg.map((item, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() => {
                                                                setFrom(item);
                                                                setFromDropdownOpen(false);
                                                            }}
                                                            style={{ padding: '8px', cursor: 'pointer' }}
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </td>


                            <td className="left-data">
                                <label htmlFor="" className="required-field">To :</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        placeholder="Destination"
                                        value={to}
                                        onChange={(e) => {
                                            setTo(e.target.value);
                                            setToDropdownOpen(true);
                                        }}
                                        onFocus={() => setToDropdownOpen(true)}
                                    />
                                    {to && isToDropdownOpen && (toSugg.length > 0 || noToStnFn) && (
                                        <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1, backgroundColor: 'white', border: '2px solid #333', width: '200px', textTransform: 'uppercase' }}>
                                            {noToStnFn ? (<p style={{ padding: '8px' }} > No Stations Found </p>) : (
                                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                                    {toSugg.map((item, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() => {
                                                                setTo(item);
                                                                setToDropdownOpen(false);
                                                            }}
                                                            style={{ padding: '8px', cursor: 'pointer', }}
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="left-data">
                                <label htmlFor="">Journey Date :</label>
                                <input type="date" placeholder="Journey Date" required value={date} min={today} onChange={(e) => setDate(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td className="left-data right-data">
                                <label htmlFor="">Class :</label>
                                <select placeholder="Select Class" required value={coach} onChange={(e) => setCoach(e.target.value)} >
                                    <option value="1 AC">1 AC</option>
                                    <option value="2 AC">2 AC</option>
                                    <option value="3 AC">3 AC</option>
                                    <option value="Sleeper">Sleeper</option>
                                </select>
                            </td>
                            <td className="left-data right-data">
                                <label htmlFor="">Type :</label>
                                <select placeholder="Type" required value={coType} onChange={(e) => setCoType(e.target.value)} >
                                    <option value="general">General</option>
                                    <option value="Tatkal">Tatkal</option>
                                    <option value="Handicapped">Handicapped</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" onClick={handleSearch}>Search </button>
            </form>
        </div>
    )
};

export default BookForm;