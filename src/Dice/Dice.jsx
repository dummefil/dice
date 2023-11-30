import './Dice.css';
import {useState} from "react";

export default function Dice() {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const getRandom = (max, min) => {
        return (Math.floor(Math.random() * (max - min)) + min) * 90;
    };

    const handleDiceClick = () => {
        const xRand = getRandom(24, 1);
        const yRand = getRandom(24, 1);
        setRotateX(xRand);
        setRotateY(yRand);
    };

    return (
        <section className="container">
            <div
                id="cube"
                style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
                onClick={handleDiceClick}
            >
                <div className="front">
                    <span className="dot dot1"></span>
                </div>
                <div className="back">
                    <span className="dot dot1"></span>
                    <span className="dot dot2"></span>
                </div>
                <div className="right">
                    <span className="dot dot1"></span>
                    <span className="dot dot2"></span>
                    <span className="dot dot3"></span>
                </div>
                <div className="left">
                    <span className="dot dot1"></span>
                    <span className="dot dot2"></span>
                    <span className="dot dot3"></span>
                    <span className="dot dot4"></span>
                </div>
                <div className="top">
                    <span className="dot dot1"></span>
                    <span className="dot dot2"></span>
                    <span className="dot dot3"></span>
                    <span className="dot dot4"></span>
                    <span className="dot dot5"></span>
                </div>
                <div className="bottom">
                    <span className="dot dot1"></span>
                    <span className="dot dot2"></span>
                    <span className="dot dot3"></span>
                    <span className="dot dot4"></span>
                    <span className="dot dot5"></span>
                    <span className="dot dot6"></span>
                </div>
            </div>
        </section>
    )
}
