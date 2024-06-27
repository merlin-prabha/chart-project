import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./index.css"

import dailyData from '../../data/dailyData.json'
import weeklyData from '../../data/weeklyData.json'
import monthlyData from '../../data/monthlyData.json'

  

const Chart = (props) => {
    const {timeframe} = props

    const renderTimeframe = () => {
      switch (timeframe) {
          case "daily":
              return dailyData
          case "weekly":
              return weeklyData
          case "monthly":
              return monthlyData
          default:
              return null
      }
  }


  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

    return (
    
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={renderTimeframe()}
          margin={{
            top: 10,
            right: 30,
            left: 30,
            bottom: 10,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      
)
}
export default Chart