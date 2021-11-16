import React, { Component } from 'react'
import PropTypes from "prop-types"
import apiCall from '../../service/apiCall'
import Loading from './Loading'
import Container from './Container'
import '../sass/Content.scss'


export default class Content extends Component {
    constructor() {
        super()
        // state
        this.state = {
            userInfos: {},
            userActivity: {},
            userAverageSessions: {},
            userPerformance: {},
            isLoaded: false,
        }
    }
    // Before component is mounted async method
    async componentDidMount() {
        // all Get request to receive data from endpoints backend
        const userInfosData = await apiCall(`http://localhost:3000/user/${this.props.id}`,this.props.id)
        const activityData = await apiCall(`http://localhost:3000/user/${this.props.id}/activity`,this.props.id)
        const averageSessionsData = await apiCall(`http://localhost:3000/user/${this.props.id}/average-sessions`,this.props.id)
        const performanceData = await apiCall(`http://localhost:3000/user/${this.props.id}/performance`,this.props.id)
        // update state with received data
        this.setState({
            userInfos : userInfosData,
            userActivity : activityData,
            userAverageSessions : averageSessionsData,
            userPerformance : performanceData,
            isLoaded: true,
        })
    }

    render () {
        // destructuring to avoid to write this.state
        const {userInfos, userActivity, userPerformance, userAverageSessions, isLoaded} = this.state
        return (
            // If State is updated show Container component otherwise show Loading component
            isLoaded ?
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

Content.propTypes = {
    id: PropTypes.string.isRequired
}
