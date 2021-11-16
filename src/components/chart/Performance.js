import React, { Component } from 'react'
import '../sass/Performance.scss'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";

class Performance extends Component {
    render () {
        // get data and kind property from props by using destructuring to avoid to write this.props.performance
      const {data, kind} = this.props.performance
      let userData = [];
      /**
       * This loop allow us to format props data to new format
       */
      for (let i = 0; i < data.length; i++) {
        userData.splice(0,0, {
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
                    data={userData}
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

Performance.propTypes = {
    data: PropTypes.array,
    kind: PropTypes.object
}

export default Performance