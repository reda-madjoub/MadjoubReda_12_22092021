import Activity from '../model/Activity'
import AverageSession from '../model/AverageSession'
import Performance from '../model/Performance'
import User from '../model/User'

const apiCall = async (fetchedData) => {
    const getRequest = await fetch(fetchedData)
    const jsonResponse = await getRequest.json()
    const URL = fetchedData.split("/").pop()
    // const id = 18
    // console.log(URL);
    switch (URL) {
        case `${12}`:
            return new User(   
                jsonResponse.data.id, 
                jsonResponse.data.keyData, 
                jsonResponse.data.todayScore, 
                jsonResponse.data.userInfos
            )
        case "activity":
            return new Activity(
                jsonResponse.data.id,
                jsonResponse.data.session
            )
        case "average-sessions":
            return new AverageSession(
                jsonResponse.data.id,
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