import React from "react";
import Base from "./Base";
import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <Base>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <img className="rounded mx-auto d-block" src="https://i.ibb.co/ZK2z9Sk/error-404.png" alt="" />
                        <Link to="/">
                        <button className="btn btn-success btn-lg mx-auto d-block">
                            Return Home
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default NotFound;