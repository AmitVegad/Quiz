import React from 'react';
import Confetti from 'react-confetti';
import { useLocation, Link } from "react-router-dom";
import useWindowSize from './hooks/useWindowSize'
const Result = (props) => {
    const {width,height} = useWindowSize();
    const location  = useLocation();
    const {totalScore, score} = location.state;

    return (
        <>
            <div className="result">
                <div className="resultbox">
                    <h2 className="top-heading">Congratulations!</h2>
                    <h3 className="top-heading-para">You have successfully completed quiz.</h3>
                    <h2 className="scoreboard">Your score: {score}/{totalScore}</h2>
                    <Link to="/"><button className="restart btn">Restart</button></Link>
                </div>
            </div>
            <Confetti
                width={width}
                height={height}
                tweenDuration={5000}
                recycle={false}
            />
        </>
    );
};



export default Result;