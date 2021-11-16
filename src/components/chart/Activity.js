import '../sass/Activity.scss'
import React, { Component } from 'react';
import PropTypes from "prop-types";
import {  BarChart, 
          Bar, 
          XAxis, 
          YAxis, 
          CartesianGrid, 
          Tooltip,
          ResponsiveContainer } from 'recharts';



export default class Activity extends Component {

  render() {
    // get session property from activity props by using destructuring
    const {sessions} = this.props.activity
    const data = []

    /**
     * Loop through all session.day to make separate years, mounth and days
     * With that we can display date format as we want
     */
    for (const item of sessions) {
      const [yyyy,mm,dd] = item.day.split("-")
      data.push({
        calories: item.calories,
        day: `${dd}/${mm}`,
        kilogram: item.kilogram
      })
    }

    return (
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
          <XAxis 
            dy={20}
            dataKey="day" 
            tick={{ fontSize: 18, fill: '#74798c'}}
            tickLine={false}
          />
          <YAxis
            orientation="right" 
            axisLine={false}
            tick={{ fontSize: 18, fill: '#74798c', strokeWidth: 6}}
            tickLine={false}
            dx={20}
            interval="number"
              allowDecimals={false}
            dataKey="kilogram"
            domain={[0, "auto"]}
            yAxisId="kg"
            />
          <YAxis
           orientation="right"
            tick={{ fontSize: 18, fill: '#74798c', strokeWidth: 6}}
            tickLine={false}
            dataKey="calories"
            domain={[0, "auto"]}
            yAxisId="kCal"
            hide={true}
            />
          
          <Tooltip 
            cursor={{fill: "#C4C4C4", opacity:"0.5"}}
            content={<CustomTooltip />}
          />
          <Bar 
            dataKey="calories" 
            fill="#282D30" 
            radius={[10, 10, 0, 0]} 
            barSize={9}
            yAxisId="kCal"
            />
          <Bar 
            yAxisId="kg" // Link data to the proper YAxis
            dataKey="kilogram" 
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

Activity.propTypes = {
  sessions: PropTypes.object,
}


// Code from recharts.js
// source : https://recharts.org/en-US/examples/CustomContentOfTooltip
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