import React,{Fragment} from 'react';
import {Link, withRouter, useHistory} from 'react-router-dom';
import "../styles.css";
import {isAuthenticated, signout} from "../auth/helper";

const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return {color: "#800080"};
    }
    else{
        return {color: "#000000"};
    }
};

const Menu = (history) => {

    const abc = useHistory();

    const header = () =>{
        return(
            <div>
            <div className="logohead text-center">
                <a href="/" className="navbar-brand">
                    <img src="https://i.ibb.co/R7YTb1L/logo-transperant.png" width="100" height="100" alt="" className="d-inline-block align-middle" />
                    <span className="text align-middle">PhysioYoga</span>
                </a>
            </div>
            <ul className="nav nav-tabs">
                <li className="nav-item"><Link style={currentTab(history,"/")} className="nav-link" to="/"> Home </Link></li>
                <li className="nav-item"><Link style={currentTab(history,"/aboutus")} className="nav-link" to="/aboutus"> About us </Link></li>
                <li className="nav-item"><Link style={currentTab(history,"/store")} className="nav-link" to="/store"> Store </Link></li>
                <li className="nav-item"><Link style={currentTab(history,"/cart")} className="nav-link" to="/cart"> Cart </Link></li>
                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li className="nav-item"><Link style={currentTab(history,"/admin/dashboard")} className="nav-link" to="/admin/dashboard"> Dashboard </Link></li>
                )}
                {!isAuthenticated() && (
                    <Fragment>
                    <li className="nav-item"><Link style={currentTab(history,"/signup")} className="nav-link" to="/signup"> Sign up </Link></li>
                    <li className="nav-item"><Link style={currentTab(history,"/signin")} className="nav-link" to="/signin"> Sign in </Link></li>
                </Fragment>
                )}
                {isAuthenticated() && (
                    <li className="nav-item">
                        <span className="nav-link text-white" onClick={() =>{
                            signout(()=>{
                                abc.push("/");
                            })
                        }}>
                            Sign out
                        </span>
                    </li>
                )}
            </ul>
        </div>
        );
    }

    const newHeader = () =>{
        return (
            <div>
                <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="navbar-brand">
                            <div className="navbar-logo">
                                <Link to="/">
                                    <img src="https://i.ibb.co/fqGccdL/horizontallogo.jpg" alt='aaa' err="" occured="" style={{"height": "4rem"}} />
                                </Link>
                            </div>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav nav-tabs ml-auto">
                                <li className="nav-item"><Link style={currentTab(history,"/")} className="nav-link" to="/"> Home </Link></li>
                                <li className="nav-item"><Link style={currentTab(history,"/store")} className="nav-link" to="/store"> Store </Link></li>
                                <li className="nav-item"><Link style={currentTab(history,"/cart")} className="nav-link" to="/cart"> Cart </Link></li>
                                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                                    <li className="nav-item"><Link style={currentTab(history,"/admin/dashboard")} className="nav-link" to="/admin/dashboard"> Dashboard </Link></li>
                                )}
                                {!isAuthenticated() && (
                                    <Fragment>
                                    <li className="nav-item"><Link style={currentTab(history,"/signup")} className="nav-link" to="/signup"> Sign up </Link></li>
                                    <li className="nav-item"><Link style={currentTab(history,"/signin")} className="nav-link" to="/signin"> Sign in </Link></li>
                                </Fragment>
                                )}
                                {isAuthenticated() && (
                                    <li className="nav-item">
                                        <span className="nav-link text-black" onClick={() =>{
                                            signout(()=>{
                                                abc.push("/");
                                            })
                                        }}>
                                            Sign out
                                        </span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

    return (
        <div>
            {newHeader()}
        </div>
    );
}



export default withRouter(Menu);