import React, { Component } from 'react'
import apiCall from '../../service/apiCall'
import Loading from './Loading'
import Container from './Container'
import '../sass/Content.scss'



export default class Content extends Component {
    constructor() {
        super()
        this.state = {
            
            userInfos: {},
            userActivity: {},
            userAverageSessions: {},
            userPerformance: {},
            isLoaded: false,

            // id: window.location.pathname.split("/").pop()
            // id: this.props.id
        }
    }
    async componentDidMount() {
        // console.log(this.props.id);
        const userInfosData = await apiCall(`http://localhost:3000/user/${this.props.id}`,this.props.id)
        const activityData = await apiCall(`http://localhost:3000/user/${this.props.id}/activity`,this.props.id)
        const averageSessionsData = await apiCall(`http://localhost:3000/user/${this.props.id}/average-sessions`,this.props.id)
        const performanceData = await apiCall(`http://localhost:3000/user/${this.props.id}/performance`,this.props.id)
        this.setState({
            userInfos : userInfosData,
            userActivity : activityData,
            userAverageSessions : averageSessionsData,
            userPerformance : performanceData,
            isLoaded: true,
        })
    }

    render () {
        
        // console.log(this.props.id);
        const {userInfos, userActivity, userPerformance, userAverageSessions, isLoaded} = this.state
        return (isLoaded ?
                (
                    <Container 
                        userInfos={userInfos}
                        userActivity={userActivity}
                        userAverageSessions={userAverageSessions}
                        userPerformance={userPerformance}
                    />
                ) 
                : 
            <Loading /> 
        )
    }
}
