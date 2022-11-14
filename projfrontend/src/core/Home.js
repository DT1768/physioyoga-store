import React from 'react';
import { API } from '../backend';
import "../styles.css";
import Base from './Base';
import { Link} from 'react-router-dom';


const Home = () => {

    const carousalHome = () => {
        return (
            <div className="container-fluid">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Link to="/physiotherapy">
                            <img className="d-block" src="https://i.ibb.co/tBrcrWW/physio-carousal.jpg" width="100%"  alt="First slide" />
                            <div className="carousel-caption d-none d-md-block" style={{color:"black",fontFamily:"cursive"}}>
                                <h4>Physiotherapy</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to="/physiotherapy">
                            <img className="d-block" src="https://i.ibb.co/zh7nL2d/yoga-carousal.jpg" width="100%"  alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block" style={{fontFamily:"cursive"}}>
                                <h4>Yoga & Meditation</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src="https://i.ibb.co/r4P7Jpb/diet-carousal.jpg" width="100%"  alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block" style={{color:"black",fontFamily:"cursive"}}>
                            <h4>Personalised Diet Plans</h4>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </div>
        )
    };

    const cardsHome = () => {
        return (
            <div className="container-fluid">
                <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <img src="https://i.ibb.co/r4P7Jpb/diet-carousal.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-warning">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img src="https://i.ibb.co/r4P7Jpb/diet-carousal.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-warning">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img src="https://i.ibb.co/r4P7Jpb/diet-carousal.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-warning">Go somewhere</a>
                        </div>
                    </div>
                </div>
                </div>
                <br />
            </div>
        )
    };
    
    const welcome = () => {
        return(
            <div>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-1">

                    </div>
                    <div className="col-5">
                        <h1 className="text mb-3 display-2">
                            <br />
                            <strong>Welcome to PhysioYoga!</strong></h1>
                        <br />
                        <h5 className="text">One stop solution for your physical and mental health.</h5>
                        <br />
                            <Link to='/store'>
                                <button className="btn btn-lg btn-success">Explore Our Services</button>
                            </Link>
                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-5">
                        <img src="https://i.ibb.co/R7YTb1L/logo-transperant.png" alt="" />
                    </div>
                </div>
                </div>
            </div>
        );
    }

    const aboutUs = () => {
        return(
            <div className='container-fluid'>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="title col-md-12 col-lg-10">
                            <h3 className="text text-center mt-5 mb-2 display-4">
                                <strong>Our Services</strong>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <img src="https://i.ibb.co/PQ4sn7v/6099962.jpg" height={"100%"} width={"100%"} alt='...' err="" occured="" />
                        </div>
                        <div className="col-8">
                            <div className="text-wrapper ml-5">
                                <h3 className="text mt-5 mb-3 display-5">
                                    <strong>Physiotherapy</strong>
                                </h3>
                                <h6 className="text display-7">
                                    <br />
                                        Physical therapists provide services that develop, maintain and restore people's maximum movement and functional ability. 
                                    <br />
                                    <br />
                                    They can help people at any stage of life, when movement and function are threatened by ageing, injury, diseases, disorders, conditions or environmental factors.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <div className="text-wrapper mr-5">
                                <h3 className="text mt-5 mb-3 display-5"><strong>Diet Planning</strong></h3>
                                <h6 className="text display-7">
                                    A healthy eating plan gives your body the nutrients it needs every day while staying within your daily calorie goal for weight loss. A healthy eating plan also will lower your risk for heart disease and other health conditions.
                                </h6>
                            </div>
                        </div>
                        <div className="col-4">
                            <img src="https://i.ibb.co/CKwNpMJ/2002-i203-005-healthy-lifestyle-cartoon.jpg" height={"100%"} width={"100%"} alt='...' err="" occured="" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src="https://i.ibb.co/WW6gGQX/3921140.jpg" height={"100%"} width={"100%"} alt='...' err="" occured="" />
                        </div>
                        <div className="col-8">
                            <div className="text-wrapper ml-5">
                                <h3 className="text mt-5 mb-3 display-5">
                                    <strong>Yoga and Meditation</strong>
                                </h3>
                                <h6 className="text display-7">
                                    <br />
                                        Yoga is an ancient and complex practice, rooted in Indian philosophy. It began as a spiritual practice but has become popular as a way of promoting physical and mental well-being. 
                                    <br />
                                    <br />
                                        improve general wellness by relieving stress, supporting good health habits, and improving mental/emotional health, sleep, and balance.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }

    const ourTeam = () => {
        return (
            <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="title col-md-12 col-lg-10">
                            <h3 className="text text-center mt-5 mb-3 display-4">
                                <strong>Our Team</strong>
                            </h3>
                            <h4 className="text text-center mb-4 display-7">Passionate Experts in each of their field, providing life changing services</h4>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-4">
                        <div className="card text-dark bg-light border border-secondary ">
                            <div className="card-header text-center lead">
                                Physiotherapist
                            </div>
                            <div className="card-body">
                                <img className='mx-auto d-block' src="https://i.ibb.co/mvgfmLt/mbr-1.jpg" width={"60%"} alt="" />
                                <br />
                                <p className="lead text-center bg-light font-weight-normal text-wrap">
                                    Dr. Priyangi Thakkar
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                    </div>
                    <div className="col-4">
                        <div className="card text-dark bg-light border border-secondary ">
                            <div className="card-header text-center lead">
                                Yoga Instructor & Nutrition Specialist
                            </div>
                            <div className="card-body">
                                <img className='mx-auto d-block' src="https://i.ibb.co/6n4w6sR/mbr-2.jpg" width={"60%"} alt="" />
                                <br />
                                <p className="lead text-center bg-light font-weight-normal text-wrap">
                                    Mr. Urvesh Thakkar
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    console.log("API IS", API);
    return ( 
        <div>
            <Base>
            {welcome()}
            {aboutUs()}
            {ourTeam()}
            </Base>
        </div>
    );
}

export default Home;