import React, { Component } from 'react'
import '../sass/AverageSessions.scss'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';





class AverageSessions extends Component {
    render () {
      // console.log(this.props);
      const {averageSessions} = this.props
      const data = averageSessions
        return (
          <>
          <h3>Durée moyenne des sessions</h3>
          <ResponsiveContainer
            className="lineChart-container" 
            width="100%" 
            height="100%"
          >
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis 
              dataKey="day" 
              stroke="rgba(255, 255, 255, 0.6)"
              tick={{ fontSize: 14, fill: "rgba(255, 255, 255, 0.5)"}}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
          domain={[0, "dataMax + 20"]}
              hide={true}
            />
            <Tooltip 
              content={<CustomTooltip />}
              className="tooltipLineChart"
              cursor={{
                stroke: "rgba(0, 0, 0, 0.1)",
                strokeWidth: 32,
              }}
            />
            <Line
              type="monotone" 
              dataKey="sessionLength" 
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth={3}
              dot={false}
              activeDot={{ stroke: '#FFFFFF33', strokeWidth: 10, r: 5 }}
              strokeDashArray="4"
            />
          </LineChart>
        </ResponsiveContainer>
</>
        )
    }
}


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

export default AverageSessions