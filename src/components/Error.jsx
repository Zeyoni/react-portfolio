import React from 'react';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="Error">
            <h2><span>ERROR:</span> 404 Not Found</h2>
            <span className="text"><Link className="nav-link" to="/">Go to HOME</Link></span>
        </div>
    )
}

export default Error;
