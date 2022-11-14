import React,{useState} from 'react';
import Base from '../core/Base';
import {Link} from 'react-router-dom';
import {signup} from '../auth/helper';

const Signup = () => {

    const [values, setValues] = useState({
        name:"",
        lastname:"",
        height: "",
        weight: "",
        email: "",
        password: "",
        confirmpassword: "",
        error: "",
        success: false
    });

    const {name, lastname, height, weight, email, password, confirmpassword, error, success} = values

    const handleChange = name => event => {
        setValues({...values, error:false, [name]: event.target.value});
    };

    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error:false});
        signup({name,lastname,height,weight,email,password})
        .then(data =>{

            if (data && data.error) {
                setValues({ ...values, error: data.error, success: false});
            }
            else if( password !== confirmpassword){
                setValues({ ...values, error: "password and confirm password doesn't match.", success: false});
            }
            else {
                setValues({
                    ...values,
                    name: "",
                    lastname: "",
                    height: "",
                    weight: "",
                    email: "",
                    password: "",
                    confirmpassword:"",
                    error: "",
                    success: true
            });
        }
        })
        .catch(console.log("Error in signUp."))
    };

    const signUpForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-black">First Name</label>
                            <input className="form-control" value={name} onChange={handleChange("name")} type="text" />
                        </div>
                        <div className="form-group">
                            <label className="text-black">Last Name</label>
                            <input className="form-control" value={lastname} onChange={handleChange("lastname")} type="text" />
                        </div>
                        <div className="form-group">
                            <label className="text-black">Height (cm)
                            <small id="passwordHelpBlock" className="form-text text-muted">
                                Optional
                            </small>
                            </label>
                            <input className="form-control" value={height} onChange={handleChange("height")} type="text" />
                            <label className="text-black">Weight (kg)
                            <small id="passwordHelpBlock" className="form-text text-muted">
                                Optional
                            </small>
                            </label>
                            <input className="form-control" value={weight} onChange={handleChange("weight")} type="text" />
                        </div>
                        <div className="form-group">
                            <label className="text-black" >Email</label>
                            <input className="form-control" value={email} onChange={handleChange("email")} type="email" />
                        </div>
                        <div className="form-group">
                            <label className="text-black ">Password</label>
                            <input className="form-control" value={password} onChange={handleChange("password")} type="password" />
                            <small id="passwordHelpBlock" className="form-text text-muted">
                                Your password must be 8 characters long and must contain 1 lowercase letter, 1 uppercase letter and 1 special character.
                            </small>
                        </div>
                        <div className="form-group">
                            <label className="text-black">Confirm Password</label>
                            <input className="form-control" value={confirmpassword} onChange={handleChange("confirmpassword")}type="password" />
                        </div>
                            <br />
                            <button onClick={onSubmit} className="btn btn-warning col-12">Submit</button>
                    </form>
                </div>
            </div>
        );
    };

    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                <div
                    className="alert alert-success"
                    style={{ display: success ? "" : "none" }}
                >
                    New account was created successfully. Please{" "}
                    <Link to="/signin">Login Here</Link>
                </div>
                </div>
            </div>
        );
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
        );
    };

    const alreadyUser = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-center ">
                    <div>
                        Alread a user?,{" "}
                        <Link to="/signin">Click Here</Link>
                        &nbsp;to Sign In
                    </div>
                </div>
                <br />
                <br />
            </div>
        );
    }

    return (
        <Base title='SignUp' description='A page for user to sign up!'>
            {alreadyUser()}
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
        </Base>
    );
}

export default Signup;