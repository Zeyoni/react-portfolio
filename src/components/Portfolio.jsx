import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { useSelector } from "react-redux";



const Portfolio = () => {
    const source = useSelector(state => state.source);
    return (
        <div className="portfolio">
            <span className="text">Portfolio</span>
            <h2 className="fw-bold text-uppercase my-3">Selected Works</h2>
            <div className="projects">
                <Slider source={source} />
            </div>
            <div className="arrow mt-4">
                <Link to="/about"><i class='bx bx-right-arrow'></i></Link>
            </div>
        </div>
    )
}

export default Portfolio;
