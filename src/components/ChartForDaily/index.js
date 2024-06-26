import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./index.css"

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const dailyData = [
    { "timestamp": "2017-01-01", "value": 4 },
    { "timestamp": "2017-01-02", "value": 0 },
    { "timestamp": "2017-01-03", "value": 9 },
    { "timestamp": "2017-01-04", "value": 4 },
    { "timestamp": "2017-01-05", "value": 14 },
    { "timestamp": "2017-01-06", "value": 20 },
    { "timestamp": "2017-01-07", "value": 4 },
    { "timestamp": "2017-01-08", "value": 3 },
    { "timestamp": "2017-01-09", "value": 11 },
    { "timestamp": "2017-01-10", "value": 9 },
    { "timestamp": "2017-01-11", "value": 14 },
    { "timestamp": "2017-01-12", "value": 10 },
    { "timestamp": "2017-01-13", "value": 4 },
    { "timestamp": "2017-01-14", "value": 0 },
    { "timestamp": "2017-01-15", "value": 9 },
    { "timestamp": "2017-01-16", "value": 5 },
    { "timestamp": "2017-01-17", "value": 12 },
    { "timestamp": "2017-01-18", "value": 2 },
    { "timestamp": "2017-01-19", "value": 18 },
    { "timestamp": "2017-01-20", "value": 15 },
    { "timestamp": "2017-01-21", "value": 21 },
    { "timestamp": "2017-01-22", "value": 4 },
    { "timestamp": "2017-01-23", "value": 14 },
    { "timestamp": "2017-01-24", "value": 8 },
    { "timestamp": "2017-01-25", "value": 1 },
    { "timestamp": "2017-01-26", "value": 0 },
    { "timestamp": "2017-01-27", "value": 18 },
    { "timestamp": "2017-01-28", "value": 12 },
    { "timestamp": "2017-01-29", "value": 10 },
    { "timestamp": "2017-01-30", "value": 9 },
    { "timestamp": "2017-02-01", "value": 1 },
    { "timestamp": "2017-02-02", "value": 13 },
    { "timestamp": "2017-02-03", "value": 9 },
    { "timestamp": "2017-02-04", "value": 14 },
    { "timestamp": "2017-02-05", "value": 7 },
    { "timestamp": "2017-02-06", "value": 10 },
    { "timestamp": "2017-02-07", "value": 3 },
    { "timestamp": "2017-02-08", "value": 5 },
    { "timestamp": "2017-02-09", "value": 13 },
    { "timestamp": "2017-02-10", "value": 6 },
    { "timestamp": "2017-02-11", "value": 16 },
    { "timestamp": "2017-02-12", "value": 10 },
    { "timestamp": "2017-02-13", "value": 8 },
    { "timestamp": "2017-02-14", "value": 0 },
    { "timestamp": "2017-02-15", "value": 2 },
    { "timestamp": "2017-02-16", "value": 15 },
    { "timestamp": "2017-02-17", "value": 2 },
    { "timestamp": "2017-02-18", "value": 4 },
    { "timestamp": "2017-02-19", "value": 8 },
    { "timestamp": "2017-02-20", "value": 5 },
    { "timestamp": "2017-02-21", "value": 1 },
    { "timestamp": "2017-02-22", "value": 14 },
    { "timestamp": "2017-02-23", "value": 9 },
    { "timestamp": "2017-02-24", "value": 0 },
    { "timestamp": "2017-02-25", "value": 1 },
    { "timestamp": "2017-02-26", "value": 6 },
    { "timestamp": "2017-02-27", "value": 8 },
    { "timestamp": "2017-02-28", "value": 12 },
    { "timestamp": "2017-02-29", "value": 7 },
    { "timestamp": "2017-02-30", "value": 4 },
    
    { "timestamp": "2017-03-01", "value": 5 },
    { "timestamp": "2017-03-02", "value": 8 },
    { "timestamp": "2017-03-03", "value": 2 },
    { "timestamp": "2017-03-04", "value": 13 },
    { "timestamp": "2017-03-05", "value": 1 },
    { "timestamp": "2017-03-06", "value": 5 },
    { "timestamp": "2017-03-07", "value": 14 },
    { "timestamp": "2017-03-08", "value": 13 },
    { "timestamp": "2017-03-09", "value": 1 },
    { "timestamp": "2017-03-10", "value": 21 },
    { "timestamp": "2017-03-11", "value": 24 },
    { "timestamp": "2017-03-12", "value": 10 },
    { "timestamp": "2017-03-13", "value": 7 },
    { "timestamp": "2017-03-14", "value": 4 },
    { "timestamp": "2017-03-15", "value": 18 },
    { "timestamp": "2017-03-16", "value": 10 },
    { "timestamp": "2017-03-17", "value": 6 },
    { "timestamp": "2017-03-18", "value": 1 },
    { "timestamp": "2017-03-19", "value": 9 },
    { "timestamp": "2017-03-20", "value": 8 },
    { "timestamp": "2017-03-21", "value": 11 },
    { "timestamp": "2017-03-22", "value": 16 },
    { "timestamp": "2017-03-23", "value": 8 },
    { "timestamp": "2017-03-24", "value": 17 },
    { "timestamp": "2017-03-25", "value": 2 },
    { "timestamp": "2017-03-26", "value": 5 },
    { "timestamp": "2017-03-27", "value": 0 },
    { "timestamp": "2017-03-28", "value": 2 },
    { "timestamp": "2017-03-29", "value": 19 },
    { "timestamp": "2017-03-30", "value": 3 },
    { "timestamp": "2017-04-01", "value": 2 },
    { "timestamp": "2017-04-02", "value": 25 },
    { "timestamp": "2017-04-03", "value": 18 },
    { "timestamp": "2017-04-04", "value": 1 },
    { "timestamp": "2017-04-05", "value": 6 },
    { "timestamp": "2017-04-06", "value": 10 },
    { "timestamp": "2017-04-07", "value": 13 },
    { "timestamp": "2017-04-08", "value": 15 },
    { "timestamp": "2017-04-09", "value": 8 },
    { "timestamp": "2017-04-10", "value": 12 },
    { "timestamp": "2017-04-11", "value": 8 },
    { "timestamp": "2017-04-12", "value": 0 },
    { "timestamp": "2017-04-13", "value": 18 },
    { "timestamp": "2017-04-14", "value": 7 },
    { "timestamp": "2017-04-15", "value": 1 },
    { "timestamp": "2017-04-16", "value": 16 },
    { "timestamp": "2017-04-17", "value": 3 },
    { "timestamp": "2017-04-18", "value": 7 },
    { "timestamp": "2017-04-19", "value": 4 },
    { "timestamp": "2017-04-20", "value": 15 },
    { "timestamp": "2017-04-21", "value": 11 },
    { "timestamp": "2017-04-22", "value": 7 },
    { "timestamp": "2017-04-23", "value": 6 },
    { "timestamp": "2017-04-24", "value": 10 },
    { "timestamp": "2017-04-25", "value": 11 },
    { "timestamp": "2017-04-26", "value": 7},
    { "timestamp": "2017-04-27", "value": 3 },
    { "timestamp": "2017-04-28", "value": 16 },
    { "timestamp": "2017-04-29", "value": 14 },
    { "timestamp": "2017-04-30", "value": 2 },
  ]

  

const ChartForDaily = () => (
    
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={dailyData}
          margin={{
            top: 10,
            right: 30,
            left: 30,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          
        </LineChart>
      </ResponsiveContainer>
      
)

export default ChartForDaily