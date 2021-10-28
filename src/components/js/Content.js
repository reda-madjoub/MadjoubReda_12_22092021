import React, { Component } from 'react'
import apiCall from '../../service/apiCall'
import Loading from './Loading'
import Container from './Container'
import '../sass/Content.scss'



export default class Content extends Component {
    constructor() {
        super()
        this.state = {
            infos: '',
            isLoaded: false,
            id: window.location.pathname.split("/").pop()
        }
    }
    async componentDidMount() {
        // console.log(this.state.id);
        const userInfosData = await apiCall(`http://localhost:3000/user/${this.state.id}`)
        const activityData = await apiCall(`http://localhost:3000/user/${this.state.id}/activity`)
        const averageSessionsData = await apiCall(`http://localhost:3000/user/${this.state.id}/average-sessions`)
        const performanceData = await apiCall(`http://localhost:3000/user/${this.state.id}/performance`)
        this.setState({
            infos : userInfosData,
            isLoaded: true,
        })
    }

    render () {
        const {infos, isLoaded} = this.state
        // console.log(infos)
        return (
            isLoaded ?(
                <>
                    <Container 
                        userInfos={infos}

                    />
                    {/* <Header name={name}/>
                    <Activity/> */}
                </>
                )
                : 
                <Loading />        
        )
    }
}
