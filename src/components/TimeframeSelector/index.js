import React from 'react';
import { useState } from "react";
import './index.css'
import Chart from "../Chart";



const TimeframeSelector  = () => {
    const [timeframe, setTimeframe] = useState("daily")

    const onSelect = (value) => {
        setTimeframe(value)
    }

    console.log(timeframe)


    return (
        <div className="bg-container">
            <h1 className="main-heading">Charts</h1>
            <div className="customise-large">
                <div className="time-frame-container">
                    <p htmlFor="option" className="description">Select the Timeframe</p>
                    <div className='button-container'>
                        <button onClick={() => onSelect('daily')} className='time-frame-button'>Daily</button>
                        <button onClick={() => onSelect('weekly')} className='time-frame-button'>Weekly</button>
                        <button onClick={() => onSelect('monthly')} className='time-frame-button'>Monthly</button>
                    </div>
                </div>
                <Chart timeframe={timeframe} />
            </div>
           
        </div>
    )
}

export default TimeframeSelector  