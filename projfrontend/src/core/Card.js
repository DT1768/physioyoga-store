import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './helper/CartHelper';
import ImageHelper from './helper/ImageHelper';

const Card = ({
    product,
    addtoCart = true,
    removeFromCart = false,
    setReload = f => f,
    reload = undefined
}) => {

    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);
    
    const cardTitle = product ? product.name : "Product Name";
    const cardDescription = product ? product.description : "Product Description";
    const cardPrice = product ? product.price : "Product Price";

    const addTocart = () => {
        addItemToCart(product, () => setRedirect(true))
    };

    const getRedirect =(redirect) => {
        if(redirect){
            return <Redirect to="/cart"></Redirect>
        }
    }

    const showAddToCart = addtoCart => {
        return (
            addtoCart && (
                <button
                    onClick={addTocart}
                    className="btn btn-block btn-outline-success mt-2 mb-2"
                >
                    Add to Cart
                </button>
            )
        );
    };

    const showRemoveFromCart = removeFromCart => {
        return (
            removeFromCart && <button
                    onClick={() => {
                        removeItemFromCart(product._id);
                        setReload(!reload)
                    }}
                    className="btn btn-block btn-outline-danger mt-2 mb-2"
                >
                    Remove from cart
                </button>
            );
    };

    return (
        <div className="card text-dark bg-light border border-success ">
            <div className="card-header text-center lead">{cardTitle}</div>
            <div className="card-body">
                {getRedirect(redirect)}
            <ImageHelper product = {product}/>
            <br />
            <p className="lead text-center bg-light font-weight-normal text-wrap">
                {cardDescription}
            </p>
            <p className="lead text-center bg-light font-weight-normal text-wrap">
                &#8377;{cardPrice}
            </p>
            <div className="row">
                <div className="col-12">
                    {showAddToCart(addtoCart)}
                </div>
                <div className="col-12">
                    {showRemoveFromCart(removeFromCart)}
                </div>
            </div>
            </div>
        </div>
        );
    };

export default Card;