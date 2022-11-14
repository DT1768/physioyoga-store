import React from 'react';
import Base from "../core/Base";
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';



const AdminDashBoard = () =>{

    const adminLeftSide = () =>{
        return (
            <div className="card-fluid text-center">
                <h4 className="card-header bg-light text-center">Navigation</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/create/category" className='nav-link text-dark'>Create Categories</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/categories" className='nav-link text-dark'>Manage Categories</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/create/product" className='nav-link text-dark'>Create Product</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/products" className='nav-link text-dark'>Manage Products</Link>
                    </li>
                </ul>
            </div>
        )
    };

    const adminRightSide = () => {
        return(
            <div className="card-fluid b-4 bg-light">
                <h4 className="card-header">Owner Information</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge text-dark mr-2">Name: </span> {name}
                    </li>
                    <li className="list-group-item">
                        <span className="badge text-dark mr-2">Email: </span> {email}
                    </li>
                    <li className="list-group-item">
                        <span className="badge bg-danger">Owner Area</span>
                    </li>
                </ul>
            </div>
        )
    };

    const {
        user: {name,email, role}
    } = isAuthenticated();


    return(
        <Base 
            title='Dashboard' 
            description='Owner Dashboard.'
            className='container p-4 bg-secondary'
        >
            <div className="row-fluid">
                <div className="col">
                    {adminLeftSide()}
                    <br />
                    <br />
                </div>
                
                <div className="col">
                    {adminRightSide()}
                    <br />
                </div>
            </div>
            
        </Base>
    )
}

export default AdminDashBoard;