import React, {useState,useEffect} from 'react';
import { API } from '../backend';
import "../styles.css";
import Base from './Base';
import { Link } from 'react-router-dom';
import Card from './Card';
import { loadCart } from './helper/CartHelper';
import Checkout from './Checkout';

const Cart = () => {

    const [products, setProducts] = useState([]);

    const [reload, setReload] = useState(false);

    useEffect(()=>{
        setProducts(loadCart())
    },[reload]);

    const loadAllProducts = () => {
        return(
            <div>
                <div className="row">
                    {products.map((product,index) => {
                        return (
                            <div key={index} className='col-sm-4'>
                                <Card
                                    key={index}
                                    product={product}
                                    addtoCart={false}
                                    removeFromCart={true}
                                    setReload={setReload}
                                    reload={reload}
                                    />
                                    <br />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    
    return(
        <Base title='Cart'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">{loadAllProducts()}</div>
                    <div className="col-4">
                        <Checkout
                            products = {products}
                            setReload= {setReload}
                        />
                    </div>
                </div>
            </div>
        </Base>
    );
};


export default Cart;