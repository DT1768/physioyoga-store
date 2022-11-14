import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import { cartEmpty, loadCart } from './helper/CartHelper';
import StripeCheckout from 'react-stripe-checkout';
import { API } from '../backend';
import { createOrder } from './helper/OrderHelper';



const Checkout = ({
    products, 
    setReload = f => f, 
    reload = undefined
}) => {

    const [data, setData] = useState({
        loading: false,
        success: false,
        error:"",
        mobileNumber: "",
        address:""
    });


    const token = isAuthenticated() && isAuthenticated().token;
    const userId = isAuthenticated() && isAuthenticated().user._id;

    const getFinalAmount = () => {
        let amount = 0;
        products.map(p => {
            amount = amount + p.price;
        });
        return amount;
    };

    const makePayment = (token) => {
        const body = {
            token,
            products
        }
        const headers = {
            "Content-Type": "application/json"
        }
        return fetch(`${API}/stripepayment`,{
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log(response);
            const {status} = response;
            console.log("STATUS:", status);
            cartEmpty(()=>{
                console.log("Cartempty");
            });
            setReload(reload);
            
        })
        .catch(error => console.log(error))
    }; 

    const checkoutButton = () => {
        return isAuthenticated() && (getFinalAmount() !== 0) ? (
            <StripeCheckout
            image='https://i.ibb.co/R7YTb1L/logo-transperant.png'
            stripeKey="pk_test_51LKPLlSGpg0HTbbHS2jpb4RdNywonl9Zaw7QoUTrelO5XaBFVdpmvW1pWgA4sSDQ9WhpVZMs7pTF4Dp24tmaGi2G00gkLWA0xl"
            token={makePayment}
            amount={getFinalAmount()* 100}
            name="PhysioYoga"
            shippingAddress
            billingAddress
            currency='INR'
            >
            <button className="btn btn-warning btn-block"> Checkout </button>
            </StripeCheckout>
        ) : (getFinalAmount() === 0 ?
        (<Link to="/Store">
            <button className="btn btn-warning btn-block"> Add some products to cart </button>
        </Link>):(<Link to="/signin">
            <button className="btn btn-warning btn-block"> Login / Signup To Checkout </button>
        </Link>)
        )
    };

    

    return (  
        <div className="row">
            <div className="col-sm-12">
                <div className="card bg-light">
                <div className="card-body">
                    <h4 className="card-text text-center">Checkout</h4>
                    <br />
                    {products.map((product, index)=> {
                        return (
                            <div key={index} className="row">
                                <div className="col-sm-6">
                                    <h6>{product.name}</h6> 
                                </div>
                                <div className="col-sm-6 text-right">
                                    <h6>: &#8377;{product.price}</h6> 
                                </div>
                            </div>
                        );
                    })}
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-sm-6">
                            <h5>Total Amount</h5> 
                        </div>
                        <div className="col-sm-6 text-right">
                            <h5>: &#8377;{getFinalAmount()}</h5> 
                        </div>
                    </div>
                    <br />
                    {checkoutButton()}
                </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;