import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {

    return (
        <div className="contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 content">
                        <span className="text">Contact</span>
                        <h2 className="fw-bold mt-3">GET IN TOUCH</h2>
                        <span className="description w-75">
                            Please fill out the form on this section to contact with me.
                            Or call between 9:00 a.m. and 8:00 p.m. Monday through Friday.
                        </span>

                        <span className="info mt-4">
                            <i className='bx bx-map me-3' ></i> Baku, Azerbaijan
                        </span>
                        <span className="info mt-3">
                            <i className='bx bx-mobile-alt me-3' ></i> +994 70 328 72 12
                        </span>
                        <span className="info mt-3">
                            <i className='bx bx-mail-send me-3'></i> zeeynalabdin@gmail.com
                        </span>
                        <div className="arrow mt-4">
                            <Link to="/"><i className='bx bx-left-arrow'></i></Link>
                        </div>
                    </div>

                    <div className="col-md-6 form">
                        <form className="content">
                            <div className="input-container">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" required />
                            </div>

                            <div className="input-container">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" required />
                            </div>

                            <div className="input-container">
                                <label htmlFor="messages">Messages</label>
                                <input type="text" id="messages" required />
                            </div>
                            <button type="submit">
                                Send <i className='bx bx-right-arrow-alt ms-2' ></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
