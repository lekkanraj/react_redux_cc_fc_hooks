
import store from '../Store';
import CONSTANTS from "../Constants";

const currentUser=(payload)=>{
    return {
        type:CONSTANTS.CURRENTUSER,
        payload:payload
    }
}

export const userPostsAction=(payload)=>{
    console.log("Action Called");
    console.log(store.getState());
    return {
        type:CONSTANTS.POSTS,
        payload:payload
    }
}

export default currentUser;