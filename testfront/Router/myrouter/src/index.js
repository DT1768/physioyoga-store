import React from "react";
import ReactDOM from "react-dom";
import {Route, Link, BrowserRouter as Router, Routes} from "react-router-dom";
import App from "./App.js";
import User from "./User.js";  
import Visit from "./Visit.js";
import NotFound from "./NotFound.js";

const routing = (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user">User</Link></li>
                <li><Link to="/visit">Visit</Link></li>
            </ul>
        </div>
        <Routes>
            <Route path="/dhruv" element={<App />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/visit" element={<Visit />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>

    </Router>
)

ReactDOM.render(routing ,document.getElementById("root"));
