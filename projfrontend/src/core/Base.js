import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import "../styles.css";

const Base = ({
    title = "",
    description = "",
    className = "bg-white text-dark p-4",
    children
    
})=> {
    return ( 
        <div>
            <Menu />
                <div className="container-fluid bg-white text-dark text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            <Footer />
        </div>
    );
}

export default Base;
