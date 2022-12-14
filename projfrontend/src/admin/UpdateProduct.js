import React, {useState, useEffect} from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { getProduct, getCategories, updateProduct } from './helper/adminapicall';
import { isAuthenticated } from '../auth/helper';

const UpdateProduct = ({match}) => {

    const {user, token} = isAuthenticated();

    const [values,setValues] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        photo: "",
        categories: [],
        category: "",
        loading: false,
        error: "",
        createdProduct:"",
        getRedirect: false,
        formData: ""
    });

    const preload = (productId) => {
        getProduct(productId).then(data => {
            if(data.error){
                setValues({...values, error: data.error});
            }
            else{
                preloadCategories();
                setValues({
                    ...values,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    category: data.category._id,
                    stock: data.stock,
                    formData: new FormData(),
                });
            }
        });
    };

    const preloadCategories = () =>{
        getCategories().then(data => {
            if(data.error){
                setValues({...values, error: data.error})
            }
            else{
                setValues({
                    categories: data,
                    formData: new FormData()
                })
            }
        })
    }
    
    useEffect(()=>{
        preload(match.params.productId);
    }, []) 

    const {
        name, description, price, stock, category, categories, loading, error, createdProduct, getRedirect, formData
    } =values;

    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value
        formData.set(name, value);
        setValues({...values, [name]: value})
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: "", loading: true});

        updateProduct(match.params.productId, user._id, token, formData)
        .then(data => {
            if(data.error){
                setValues({...values,error: data.error});
            }
            else{
                setValues({
                    ...values,
                    name:"",
                    description:"",
                    price:"",                    
                    photo:"",
                    stock:"",
                    loading: false,
                    createdProduct: data.name
                });
            }
        })
        .catch()
    };

    const successMessage = () => {
        return (
            <div
                className="alert alert-success mt-3"
                style={{ display: createdProduct ? "" : "none" }}
            >
                <h4>{createdProduct} updated successfully.</h4>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
            >
                {error}
            </div>
        );
    };

    const goBack = () => {
        return (
            <div className="mt-5">
                <Link className='btn btn-sm btn-warning mb-3' to="/admin/dashboard"> Admin Home</Link>
            </div>
        );
    };

    const updateProductForm = () => (
        <form >
        <div className="form-group">
            <label className="btn btn-block btn-warning">
            <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
            />
            </label>
        </div>
        <div className="form-group">
            <input
            onChange={handleChange("name")}
            name="photo"
            className="form-control"
            placeholder="Name"
            value={name}
            />
        </div>
        <div className="form-group">
            <textarea
            onChange={handleChange("description")}
            name="photo"
            className="form-control"
            placeholder="Description"
            value={description}
            />
        </div>
        <div className="form-group">
            <input
            onChange={handleChange("price")}
            type="number"
            className="form-control"
            placeholder="Price"
            value={price}
            />
        </div>
        <div className="form-group">
            <select
            onChange={handleChange("category")}
            className="form-control"
            placeholder="Category"
            >
            <option>Select</option>
            {categories && 
            categories.map((cate,index) => {
                return (
                    <option key={index} value={cate._id}>{cate.name}</option>
                )
            })}
            </select>
        </div>
        <div className="form-group">
            <input
            onChange={handleChange("stock")}
            type="number"
            className="form-control"
            placeholder="stock"
            value={stock}
            />
        </div>
        
        <button type="submit" onClick={onSubmit} className="btn btn-outline-warning">
            Update Product
        </button>
        </form>
    );


    return (
        <Base title="Update product" className='container bg-light pd-4'>
            
            <div className="row bg-light text-dark rounded">
                <div className="col md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {updateProductForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    );
};

export default UpdateProduct;