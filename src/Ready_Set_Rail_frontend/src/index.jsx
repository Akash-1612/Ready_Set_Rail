// import { Ready_Set_Rail_backend } from "../../declarations/Ready_Set_Rail_backend";

import * as React from "react"; 
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import PNR from "./components/pages/pnrcheck";
import SearchResult from "./components/pages/srcres";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Dashboard />} />
        <Route path = "/pnr" element = {<PNR />} />
        <Route path = "/search-result" element = {<SearchResult />} />
      </Routes>
    </BrowserRouter>
  )
};

render(<App />, document.getElementById("app"));