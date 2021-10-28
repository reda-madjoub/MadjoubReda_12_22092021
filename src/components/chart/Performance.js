import React, { Component } from 'react'
import '../sass/Performance.scss'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';



const data = [
    {
      subject: 'Math',
      A: 120,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      A: 98,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      A: 99,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      A: 85,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      fullMark: 150,
    },
  ];

class Performance extends Component {
    render () {
        return (
            <ResponsiveContainer width="100%" height="100%" border-radius="10px">
                <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    data={data}
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