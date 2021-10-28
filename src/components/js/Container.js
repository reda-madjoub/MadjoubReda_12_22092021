import React, { Component } from 'react'
import '../sass/Container.scss'
import Activity from '../chart/Activity'
import Performance from '../chart/Performance'
import UserInfos from '../chart/UserInfos'
import AverageSessions from '../chart/AverageSessions'
import Score from '../chart/Score'
import Header from './Header'

class Container extends Component {
    render () {
        console.log(this.props.userInfos)
        const {userInfos} = this.props
        console.log(userInfos.KeyData.firstName);
        return (
            <main className="parent">
                <section className="user-infos">
                    <UserInfos infos={userInfos}/>
                </section>
                <section className="activity">
                    <Activity/>
                </section>
                <section className="head"> 
                    <Header name={userInfos.KeyData.firstName}/>
                </section>
                <section className="average-sessions">
                    <AverageSessions/>
                </section>
                <section className="performance">
                    <Performance/> 
                </section>
                <section className="score">
                    <Score/>
                </section>
            </main>
        )
    }
}

export default Container