
import CONSTANTS from "../Constants";

const IntialState=[]

const PostReducer=(state=IntialState,action)=>{
    switch(action.type){
        case CONSTANTS.POSTS: return {...action.payload}
        default : return state
    }

}

export default PostReducer;