import axios from "axios"

export const getData = async (dispatch) => {
    try {

        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch({type: "success", payload: data})

    } catch (error) {
        dispatch({type: "failed", payload: "Somthing Went Wrong..."})    
    }
   
}