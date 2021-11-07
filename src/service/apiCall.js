import Activity from '../model/Activity'
import AverageSession from '../model/AverageSession'
import Performance from '../model/Performance'
import User from '../model/User'

const apiCall = async (fetchedData, id) => {
    const getRequest = await fetch(fetchedData)
    const jsonResponse = await getRequest.json()
    const URL = fetchedData.split("/").pop()

    if(jsonResponse === "can not get user") window.location.replace('/');
    // if(jsonResponse === "can not get user") <Redirect to={NotFound}/>
    
    switch (URL) {
        case `${id}`:
            return new User(   
                jsonResponse.data.id, 
                jsonResponse.data.keyData, 
                jsonResponse.data.todayScore || jsonResponse.data.score, 
                jsonResponse.data.userInfos
            )
        case "activity":
            return new Activity(
                jsonResponse.data.userId,
                jsonResponse.data.sessions
            )
        case "average-sessions":
            return new AverageSession(
                jsonResponse.data.userId,
                jsonResponse.data.sessions
            )
        case "performance":
            return new Performance(
                jsonResponse.data.userId,
                jsonResponse.data.kind,
                jsonResponse.data.data
            )
        default:
            console.log("No data loaded !");
            break;
    }
}
export default apiCall