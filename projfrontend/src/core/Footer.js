import React from 'react';
import "../styles.css";
import { Link } from 'react-router-dom';

const Footer = () => {

    const oldFooter = () => {
        <div>
            
            <footer className="footer">
                <div className="container text-white text-center py-3">
                    <img src="https://i.ibb.co/fqGccdL/horizontallogo.jpg" width="45%" height="auto" alt="horizontallogo" style={{borderRadius: "12px"}} />
                    <br />
                    <h5>Reach out to us incase of any questions.</h5>
                    <button className="btn btn-warning">Contact Us</button>
                </div>
            </footer>
        </div>
    }

    const newFooter = () => {
        return (
            <div>
                <footer className="footer">
                <div style={{  
                    backgroundImage: `url(${'https://i.ibb.co/vhpfQKT/background5.jpg'})`}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 col-6">
                            <div className="media-wrap">
                                <Link to="/">
                                    <img src="https://i.ibb.co/R7YTb1L/logo-transperant.png" height="200px" width="200px" err="" occured="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-10 col-6">
                            <br />
                            <p className="text-right">
                                <Link to="/store" className="text-black">Store</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to="/cart" className="text-black">Cart</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <br />
                                <br />
                                <br />
                                <br />+91 9876543210
                                <br />support@physioyoga.co.in
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                </footer>
            </div>
        );
    }

    return (
        <div>
            {newFooter()}
        </div>
    )
};

export default Footer;