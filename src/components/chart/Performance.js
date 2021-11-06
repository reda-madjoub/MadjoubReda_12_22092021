import React, { Component } from 'react'
import '../sass/Performance.scss'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

class Performance extends Component {
    render () {
      const {data, kind} = this.props.performance
      // console.log(this.props.performance);
      let test = [];
      for (let i = 0; i < data.length; i++) {
        test.splice(0,0, {
          subject: kind[i+1],
          A: data[i].value,
          fullMark: 300
          
        })
      }
        return (
            <ResponsiveContainer width="100%" height="100%" border-radius="10px">
                <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    data={test}
                    outerRadius={"70%"}  
                >
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis 
                        dataKey="subject"
                        stroke="white"
                        dy={4}
                        tickLine={false}
                        tick={{
                        fontSize: 12,
                        fontWeight: 500,
                        }}    
                    />
                    <Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        )
    }
}

export default Performance