import React, { Component } from 'react'
import  '../sass/UserInfos.scss'
import  energy from '../../img/energy.svg'
import  chicken  from '../../img/chicken.svg'
import  cheeseburger  from '../../img/cheeseburger.svg'
import  apple  from '../../img/apple.svg'

class UserInfos extends Component {

    render () {
        return (
            <div className="container-userInfos">
                <div className="keydata">
                    <div className="icon" id="energy">
                        <img src={energy} alt="fire represent energy"/>
                    </div>
                    <div className="content">
                        <p><strong>1,930kCal</strong></p>
                        <p><em>Calories</em></p>
                    </div>
                </div>
                <div className="keydata">
                    <div className="icon" id="chicken">
                        <img src={chicken} alt="fire represent energy"/>
                    </div>
                    <div className="content">
                        <p><strong>1,930kCal</strong></p>
                        <p><em>Calories</em></p>
                    </div>
                </div>
                <div className="keydata">
                    <div className="icon" id="apple">
                        <img src={apple} alt="fire represent energy"/>
                    </div>
                    <div className="content">
                        <p><strong>1,930kCal</strong></p>
                        <p><em>Calories</em></p>
                    </div>
                </div>
                <div className="keydata">
                    <div className="icon" id="cheeseburger">
                        <img src={cheeseburger} alt="fire represent energy"/>
                    </div>
                    <div className="content">
                        <p><strong>1,930kCal</strong></p>
                        <p><em>Calories</em></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfos