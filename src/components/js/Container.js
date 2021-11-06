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
        // console.log(this.props.userInfos)
        const { userInfos,
                userActivity,
                userPerformance, 
                userAverageSessions
            } = this.props
        return (
            <main className="parent">
                <section className="user-infos">
                    <UserInfos infos={userInfos.userInfos}/>
                </section>
                <section className="activity">
                    <Activity activity={userActivity}/>
                </section>
                <section className="head"> 
                    <Header name={userInfos.KeyData.firstName}/>
                </section>
                <section className="average-sessions">
                    <AverageSessions averageSessions={userAverageSessions.sessions}/>
                </section>
                <section className="performance">
                    <Performance performance={userPerformance}/> 
                </section>
                <section className="score">
                    <Score todayScore={userInfos?.todayScore} score={userInfos?.score} />
                </section>
            </main>
        )
    }
}

export default Container