import '../sass/Activity.scss'
import React, { Component } from 'react';
import {  BarChart, 
          Bar, 
          Cell, 
          XAxis, 
          YAxis, 
          CartesianGrid, 
          Tooltip, 
          Legend, 
          ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    kg: 4000,
    Kcal: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    kg: 3000,
    Kcal: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    kg: 2000,
    Kcal: 2800,
    amt: 2290,
  },
  {
    name: 'Page D',
    kg: 2780,
    Kcal: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    kg: 1890,
    Kcal: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    kg: 2390,
    Kcal: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    kg: 3490,
    Kcal: 4300,
    amt: 2100,
  },
];

export default class Activity extends Component {

  render() {
    return (
//       <BarChart width={730} height={250} data={data}>
//   <CartesianGrid strokeDasharray="3 3" />
//   <XAxis dataKey="name" />
//   <YAxis />
//   <Tooltip />
//   <Legend />
//   <Bar dataKey="pv" fill="#8884d8" />
//   <Bar dataKey="uv" fill="#82ca9d" />
// </BarChart>
<div className="activity-chart-container">
<div className="header-barChart">
<h3>Activité quotidienne</h3>
<div className="legend">
  <div id="poids">
    <span className="point"></span>
    <h4>Poids (kg)</h4>
  </div>
  <div id="calories">
    <span className="point"></span>
    <h4>Calories brûlées (kCal)</h4>
  </div>
</div>
</div>
      <ResponsiveContainer 
        width="100%"
        // height="100%" 
        // aspect={2.5}
        >
        <BarChart
        className="barChart"
        margin={{
          top: 20, right: 0, bottom: 30, left: 0,
        }}
          legendType="circle"
          data={data}
          barGap={8}
        >
          <CartesianGrid
          vertical={false}
          strokeDasharray="3 3" />
          {/* <Legend 
            className="legend-Activity"
            verticalAlign="top" 
            align="right"
            width="10px"
            iconType="circle"

            // height={20}
            
             */}
             {/* /> */}
          <YAxis 
            dataKey="Kcal" 
            orientation="right" 
            axisLine={false}
            tick={{ fontSize: 18, fill: '#74798c', strokeWidth: 6}}
            tickLine={false}
            dx={20}
            />
          <XAxis 
            dy={20}
            dataKey="kg" 
            tick={{ fontSize: 18, fill: '#74798c'}}
            tickLine={false}
          />
          <Tooltip 
            cursor={{fill: "#C4C4C4", opacity:"0.5"}}
            content={<CustomTooltip />}
          />
          <Bar 
            dataKey="Kcal" 
            fill="#282D30" 
            radius={[10, 10, 0, 0]} 
            barSize={9}
            />
          <Bar 
            dataKey="kg" 
            fill="#E60000" 
            radius={[10, 10, 0, 0]}
            barSize={9} 
            
          />
        </BarChart>
      </ResponsiveContainer>
</div>
    )
  }
}


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className="custom-tooltip-activity">
        <p className="label">{`${payload[1].value} kg`}</p>
        <p className="label">{`${payload[0].value} Kcal`}</p>
      </div>
    );
  }

  return null;
};