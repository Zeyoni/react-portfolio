import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import video from '../videos/about.mp4'

const About = () => {

    const [active, setActive] = useState('')

    return (
        <div className="About">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 content">
                        <div className="wrapper">
                            <span className="text">Skills</span>
                            <h2 className="text-white fw-bold">PROGRAMMING SKILLS</h2>
                            <span className="text-light mt-3">
                                I have 1+ years of experience in the field of frontend.
                                In addition to my own projects that I have gained
                                experience, there are several real projects.
                            </span>
                            <InView as="div" onChange={() => setActive("active")}>
                                <div className="skills mt-4">
                                    <div className="skill-about mt-3">
                                        <div className="skill-name">
                                            <span>HTML & CSS</span>
                                            <span>90%</span>
                                        </div>
                                        <div className="line mt-3 ">
                                            <div className={`inner-line ${active}`}></div>
                                        </div>
                                    </div>

                                    <div className="skill-about mt-3">
                                        <div className="skill-name">
                                            <span>Bootstrap / SCSS</span>
                                            <span>85%</span>
                                        </div>
                                        <div className="line mt-3 ">
                                            <div className={`inner-line ${active}`}></div>
                                        </div>
                                    </div>

                                    <div className="skill-about mt-3">
                                        <div className="skill-name">
                                            <span>JavaScript / JQuery</span>
                                            <span>70%</span>
                                        </div>
                                        <div className="line mt-3 ">
                                            <div className={`inner-line ${active}`}></div>
                                        </div>
                                    </div>

                                    <div className="skill-about mt-3">
                                        <div className="skill-name">
                                            <span>React / Redux</span>
                                            <span>50%</span>
                                        </div>
                                        <div className="line mt-3 ">
                                            <div className={`inner-line ${active}`}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="arrow">
                                    <Link to="/contact"><i className='bx bx-right-arrow'></i></Link>
                                </div>
                            </InView>
                        </div>

                    </div>
                    <div className="col-md-6 video d-md-block d-none">
                        <video autoPlay loop>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;
