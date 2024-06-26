import { useState } from "react";
import './index.css'
import ChartForDaily from "../ChartForDaily";
import ChartForWeek from "../ChartForWeek";
import ChartForMonth from "../ChartForMonth";

const dropDownOptions = [
    {
        label: "Daily",
        value: "daily",
    },
    {
        label: "Weekly",
        value: "weekly",
    },
    {
        label: "Monthly",
        value: "monthly",
    }
]

const Home = () => {
    const [selectedOption, setSelectedOption] = useState("daily")

    const onChangeSelectOption = (e) => {
        setSelectedOption(e.target.value)
    }

    console.log(selectedOption)

    const renderChart = () => {
        switch (selectedOption) {
            case "daily":
                return (<ChartForDaily />)
            case "weekly":
                return (<ChartForWeek />)
            case "monthly":
                return (<ChartForMonth />)
            default:
                return null
        }
    }

    return (
        <div className="bg-container">
            <h1 className="main-heading">Charts</h1>
            <div className="customise-large">
                <div className="drop-down-container">
                    <label htmlFor="option" className="label">Select the Timeframe</label>
                    <select id="option" className="form-control drop-down" onChange={onChangeSelectOption}>
                        {dropDownOptions.map(option => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                {renderChart()}
            </div>
        </div>
    )
}

export default Home 