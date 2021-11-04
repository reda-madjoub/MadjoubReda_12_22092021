import React, { Component } from 'react'
import '../sass/Score.scss'

import { PieChart, Pie, Cell } from 'recharts';




  
  class Score extends Component {
    render () {
      const {score, todayScore} = this.props
      let finalScore;
      if(score) finalScore = score
      else finalScore = todayScore
      const pieData = [
        { value:  finalScore},
        { value: 1-finalScore },
      ]
    
      // console.log(score)
      // console.log(todayScore)
        return (
           <>
           <PieChart width={250} height={250} className="pieChart" >
            <Pie
              className="pie"
                data={pieData}
                cx={"50%"}
                cy={"60%"}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                innerRadius={70}
                outerRadius={80}
                startAngle={90}
                endAngle={460}
            >
              <Cell
              className="cell"
                fill={"#ff0101"}
                cornerRadius="50%"
              />
              <Cell
              className="cell"
                fill={"transparent"}
                cornerRadius="50%"
                margin={{
                  top: 0
                }}
              />
            </Pie>

          </PieChart>
            <div className="text-PieChart">
                <h3>Score</h3>
                <div id="score">
                <div id="box-content">
                    <p><span id="percentage">{finalScore*100}%</span><br /> de votre objectif</p>
                </div>
                </div>
            </div>
            </>
        )
    }
}

export default Score