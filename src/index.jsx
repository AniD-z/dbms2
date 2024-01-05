import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Input from "./components/event_forms/input";
// import Home from "./components/home";
import SuccussPage from "./components/event_forms/sucess";
import EventPage from "./components/event_forms/eventpage";
import App from "./App";



function Routee() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
         
          <Route path="/succuss" exact element={<SuccussPage />} />
         
       
          <Route path="/input" exact element={<Input/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routee;
