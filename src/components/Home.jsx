import React from 'react';
import {  Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-main-div">
            <h1 className="home-heading">Quiz App</h1>
            <Link to="/quiz"><button className="home-btn btn">Start</button></Link>
        </div>
    );
};

export default Home;