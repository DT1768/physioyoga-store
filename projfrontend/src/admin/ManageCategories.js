import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import { getCategories, deleteCategory } from './helper/adminapicall';
import { isAuthenticated } from '../auth/helper';


const ManageCategories = () => {

    const [categories, setCategories] = useState([]);

    const {user, token} = isAuthenticated();

    const preload = () => {
        getCategories().then(data =>{
            if(data.error){
                console.log(data.error);
            }
            else{
                setCategories(data);
            }
        })
    }

    useEffect(()=>{
        preload();
    }, []);

    const goBack = () => {
        return (
            <div className="mt-5">
                <Link className='btn btn-sm btn-warning mb-3' to="/admin/dashboard"> Admin Home</Link>
            </div>
        );
    };

    const deleteThisCategory = categoryId => {
        deleteCategory(categoryId, user._id, token).then(data =>{
            if(data.error){
                console.log(data.error);
            }
            else{
                preload();
            }
        });
    }

    const manageCategoriesForm = () => {
        return(
            <div className='container'>
                
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center text-dark my-3">All Categories</h2>
                        {categories.map((category, index) =>{
                            return (
                                <div key={index} className="row text-center mb-2 ">
                                    <div className="col-4">
                                        <h3 className="text-dark text-left">{category.name}</h3>
                                    </div>
                                    <div className="col-4">
                                        <Link
                                            className="btn btn-md btn-warning"
                                            to={`/admin/category/update/${category._id}`}
                                        >
                                            Update
                                        </Link>
                                    </div>
                                    <div className="col-4">
                                        <button 
                                        onClick={() => {
                                            deleteThisCategory(category._id);
                                        }} 
                                        className="btn btn-md btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    return (  
        <Base title='Manage Categories' className='container bg-light pd-4'>
            <div className="row bg-light text-dark rounded">
                <div className="col md-8 offset-md-2">
                    {manageCategoriesForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    );
}

export default ManageCategories; 
