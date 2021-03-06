import React, { Component } from 'react'
import PropTypes from "prop-types";
import  '../sass/UserInfos.scss'
import  energy from '../../img/energy.svg'
import  chicken  from '../../img/chicken.svg'
import  cheeseburger  from '../../img/cheeseburger.svg'
import  apple  from '../../img/apple.svg'

class UserInfos extends Component {

    render () {
        // get infos property from props by using destructuring
        const {infos} = this.props
        return (
            <div className="container-userInfos">
                <div className="keydata">
                    <div className="icon" id="energy">
                        <img src={energy} alt="fire represent energy"/>
                    </div>
                    <div className="content">
                        <p><strong>{infos.calorieCount}kCal</strong></p>
                        <p><em>Calories</em></p>
                    </div>
                </div>
                <div className="keydata">
                    <div className="icon" id="chicken">
                        <img src={chicken} alt="fire represent energy"/>
                    </div>
                    <div className="content">
                        <p><strong>{infos.proteinCount}g</strong></p>
                        <p><em>Proteines</em></p>
                    </div>
                </div>
                <div className="keydata">
                    <div className="icon" id="apple">
                        <img src={apple} alt="fire represent energy"/>
                    </div>
                    <div className="content">
                        <p><strong>{infos.carbohydrateCount}g</strong></p>
                        <p><em>Glucides</em></p>
                    </div>
                </div>
                <div className="keydata">
                    <div className="icon" id="cheeseburger">
                        <img src={cheeseburger} alt="fire represent energy"/>
                    </div>
                    <div className="content">
                        <p><strong>{infos.lipidCount}g</strong></p>
                        <p><em>Lipides</em></p>
                    </div>
                </div>
            </div>
        )
    }
}

UserInfos.propTypes = {
    infos: PropTypes.object.isRequired
}

export default UserInfos