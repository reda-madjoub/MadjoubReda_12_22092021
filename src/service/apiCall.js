import Activity from '../model/Activity'
import AverageSession from '../model/AverageSession'
import Performance from '../model/Performance'
import User from '../model/User'


/**
 * 
 * @param {String} fetchedData 
 * @param {Number} id 
 * @returns Object
 */
const apiCall = async (fetchedData, id) => {
    const getRequest = await fetch(fetchedData)
    // convert data to json format
    const jsonResponse = await getRequest.json()
    // get last part of URL
    const URL = fetchedData.split("/").pop()

    if(jsonResponse === "can not get user") window.location.replace('/');
    // if(jsonResponse === "can not get user") <Redirect to={NotFound}/>
    
    // 
    switch (URL) {
        case `${id}`:
            // Instance of User class
            return new User(   
                jsonResponse.data.id, 
                jsonResponse.data.keyData, 
                jsonResponse.data.todayScore || jsonResponse.data.score, 
                jsonResponse.data.userInfos
            )
        case "activity":
            // Instance of Activity class
            return new Activity(
                jsonResponse.data.userId,
                jsonResponse.data.sessions
            )
        case "average-sessions":
            // Instance of AverageSession class
            return new AverageSession(
                jsonResponse.data.userId,
                jsonResponse.data.sessions
            )
        case "performance":
            // Instance of Performance class
            return new Performance(
                jsonResponse.data.userId,
                jsonResponse.data.kind,
                jsonResponse.data.data
            )
        default:
            // No endpoint for this get request
            console.log("No data loaded !");
            break;
    }
}
export default apiCall