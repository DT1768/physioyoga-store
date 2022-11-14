import React, {useState, useEffect} from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import { deleteProduct, getAllProdcuts } from './helper/adminapicall';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    const {user, token} = isAuthenticated();

    const preload = () => {
        getAllProdcuts().then(data =>{
            if(data.error){
                console.log(data.error);
            }
            else{
                setProducts(data);
            }
        })
    }

    useEffect(()=>{
        preload();
    }, []);

    const deleteThisProduct = productId => {
        deleteProduct(productId, user._id, token).then(data =>{
            if(data.error){
                console.log(data.error);
            }
            else{
                preload();
            }
        });
    }

    const goBack = () => {
        return (
            <div className="mt-5">
                <Link className='btn btn-sm btn-warning mb-3' to="/admin/dashboard"> Admin Home</Link>
            </div>
        );
    };

    const manageProductsForm = () => {
        return(
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center text-dark my-3">All products</h2>
                        {products.map((product, index) =>{
                            return (
                                <div key={index} className="row text-center mb-2 ">
                                    <div className="col-4">
                                        <h3 className="text-dark text-left">{product.name}</h3>
                                    </div>
                                    <div className="col-4">
                                        <Link
                                            className="btn btn-md btn-warning"
                                            to={`/admin/product/update/${product._id}`}
                                        >
                                            Update
                                        </Link>
                                    </div>
                                    <div className="col-4">
                                        <button 
                                        onClick={() => {
                                            deleteThisProduct(product._id)
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
        <Base title='Manage Products' className='container bg-light pd-4'>
            <div className="row bg-light text-dark rounded">
                <div className="col md-8 offset-md-2">    
                    {manageProductsForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    );
}

export default ManageProducts;