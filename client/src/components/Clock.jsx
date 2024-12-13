// git
// feature/clock-component


import {useEffect, useState} from "react";

export default function Clock () {
    const [currentTime, setCurrentTime] = useState(getCurrentTime())

    function getCurrentTime () {
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();

        return `${hours}:${minutes}`;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getCurrentTime())
        }, 1000)

        // cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="clock-component digital">
            <h2 className="current-time" style={{ fontWeight: 'bold', textAlign: 'center'}}>
                    {currentTime}
            </h2>
        </div>
    )
}