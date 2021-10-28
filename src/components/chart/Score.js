import React, { Component } from 'react'
import '../sass/Score.scss'

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const pieData = [
    { value: 0.12 },
    { value: 1-0.12 },
  ]


class Score extends Component {
    render () {
        return (
           <>
           <PieChart width={250} height={250} >
            <Pie
                data={pieData}
                cx={"50%"}
                cy={"50%"}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                innerRadius={70}
                outerRadius={80}
                startAngle={90}
                endAngle={460}
            >
              <Cell
                fill={"#ff0101"}
                cornerRadius="50%"
              />
              <Cell
                fill={"transparent"}
                cornerRadius="50%"
              />
            </Pie>

          </PieChart>
            <div>
                <h3>Score</h3>
                <div id="score">
                <div id="box-content">
                    <p><span id="percentage">12%</span><br /> de votre objectif</p>
                </div>
                </div>
            </div>
            </>
        )
    }
}

export default Score