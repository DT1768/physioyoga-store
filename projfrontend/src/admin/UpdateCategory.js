import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { getCategory, updateCategory } from './helper/adminapicall';


const UpdateCategory = ({match}) => {

    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess]=useState(false);

    const {user, token} = isAuthenticated();

    const goBack = () => {
        return (
            <div className="mt-5">
                <Link className='btn btn-sm btn-warning mb-3' to="/admin/dashboard"> Admin Home</Link>
            </div>
        );
    };

    const preload = (categoryId) => {
        getCategory(categoryId).then(data =>{
            if(data.error){
                setError(true);
            }
            else{
                setName(data.name);
            }
        });
    };

    useEffect(() => {
        preload(match.params.categoryId);
    }, [])

    const handleChange = (event) => {
        setError("");
        setName(event.target.value)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess(false);

        //backend Request
        updateCategory(match.params.categoryId,user._id, token, {name})
        .then(data => {
            if(data.error){
                setError(true);
                console.log(data.error);
            }
            else{
                setError("");
                setSuccess(true);
                setName("");
            }
        })
    };

    const successMessage = () => {
        if(success){
            return (
                <h4 className="text-success">Category Updated Successfully.</h4>
            )
        }
    }

    const errorMessage = () => {
        if(error){
            return (
                <h4 className="text-success">Failed to Update Category.</h4>
            )
        }
    }

    const categoryForm = () => {
        return(
            <form>
                <div className="form-group">
                    <p className="lead">Enter the category</p>
                    <input type="text" 
                    className='form-control my-3' 
                    onChange={handleChange}
                    value = {name}
                    autoFocus 
                    required 
                    placeholder='e.g merchandise' />
                    <button onClick={onSubmit} className="btn btn-outline-warning"> Update Category</button>
                </div>
            </form>
        );
    }

    return ( 
        <Base title='Update category' className='container bg-light p-4'>
            <div className="row bg-light rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {categoryForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    );
}

export default UpdateCategory;