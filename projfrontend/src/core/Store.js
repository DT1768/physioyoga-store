import React, {useState,useEffect} from 'react';
import { API } from '../backend';
import "../styles.css";
import Base from './Base';
import { Link } from 'react-router-dom';
import Card from './Card';
import { getProducts } from './helper/coreapicalls';


const Store = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProduct = () => {
        getProducts().then(data => {
            if(data.error){
                setError(data.error);
            }
            else{
                setProducts(data);
            }
        })
    }

    useEffect(() => {
        loadAllProduct()
    },[])

    return(
        <Base title='Store'>
            <div className="container-fluid">
                <h1 className='text-dark text-center'> Products</h1>
                <br />
                <div className="row">
                    {products.map((product, index)=> {
                        return (
                            <div key={index} className='col-sm-4'>
                                <Card product={product} />
                                <br />
                            </div>
                        );
                    })}
                </div>
            </div>
        </Base>
    );
};


export default Store;