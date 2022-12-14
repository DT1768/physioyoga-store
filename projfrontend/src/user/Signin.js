import React,{useState} from 'react';
import Base from '../core/Base';
import {Link , Redirect} from 'react-router-dom';

import {signin, authenticate, isAuthenticated} from "../auth/helper";

const Signin = () => {

    const [values, setValues] = useState({
            email:"dhruvthakkar1768@gmail.com",
            password:"dhruv1768",
            error: "",
            loading: false,
            didRedirect: false
        });

    const {email, password,error, loading, didRedirect} = values;
    const {user} = isAuthenticated();

    const handleChange = name => event => {
            setValues({...values, error:false, [name]: event.target.value});
        };

    const onSubmit = event => {
            event.preventDefault();
            setValues({...values, error: false, loading:true})
            signin({email, password})
                .then(data =>{
                    if(data && data.error){
                        setValues({...values,error: data.error, loading:false})
                    }
                    else{
                        authenticate(data, ()=>{
                            setValues({
                                ...values,
                                didRedirect: true
                        });
                        });
                    }
                })
                .catch(console.log("Sign In Failed."))
        };
    
    const performRedirect = () => {
        if(didRedirect){
            if(user && user.role === 1){
                return <Redirect to="/admin/dashboard" />;
            }
            else{
                return <Redirect to="/store" />;
            }
        }
        if(isAuthenticated()){
            return <Redirect to="/" />
        }
    };

    const signInForm = () => {

        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form className='form'>
                        <div className="form-group">
                            <label className="text-black">Email</label>
                            <input onChange={handleChange("email")} value={email} className="form-control" type="email" />
                        </div>
                        <div className="form-group">
                            <label className="text-black">Password</label>
                            <input onChange={handleChange("password")} value={password} className="form-control" type="password" />
                        </div>
                            <br />
                            <button type="button" onClick={onSubmit} className="btn btn-warning col-12">Submit</button>
                    </form>
                </div>
            </div>
        );
    };

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    };

    const errorMessage = () => {
        return (
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
            <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
            >
                {error}
            </div>
            </div>
        </div>
        )
    };

    const newUser = () => {
        return (
            <div>
                <div className="row">
                <div className="col-md-6 offset-sm-3 text-center ">
                        <div>
                            New user?,{" "}
                            <Link to="/signup">Click Here</Link>
                            &nbsp;to Sign Up
                            </div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        )
    }

    return (
        <Base title='Sign in' description='A page for user to sign in!'>
            {loadingMessage()}
            {errorMessage()}
            {newUser()}
            {signInForm()}
            {performRedirect()}
        </Base>
    )
};

export default Signin;