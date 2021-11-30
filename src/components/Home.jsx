import React from 'react'
import { Link } from 'react-router-dom';
import photo from '../photos/photo.jpg'

const Home = () => {

    return (
        <div className="Home container-fluid">
            <div className="wrapper row">
                <div className="content col-md-6">
                    <div className="top">
                        <span className="text">Qədirov Zeynalabdin</span>
                        <h2 className="fw-bold text-uppercase my-3">Front-End Developer</h2>
                        <h2 className="fw-bold text-uppercase">React Developer</h2>
                    </div>
                    <span className="middle my-3">
                        Web Development <i class='bx bx-right-arrow-alt ms-3'></i>
                    </span>

                    <div className="bottom">
                        <div className="left">
                            <span>1+</span>
                            <span>Years of Experience</span>
                        </div>
                        <div className="right">
                            <span>10+</span>
                            <span>Happy Customers</span>
                        </div>
                    </div>
                    <div className="arrow mt-4">
                        <Link to="/portfolio"><i className='bx bx-right-arrow'></i></Link>
                    </div>

                </div>
                <div className="photo col-md-6 order-first order-md-last">
                    <div className="custom-card"></div>
                    <img src={photo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;
