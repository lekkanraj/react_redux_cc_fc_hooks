
import CONSTANTS from "../Constants";

const IntialState={selecteduser:0}

const UserReducer=(state=IntialState,action)=>{
    switch(action.type){
        case CONSTANTS.CURRENTUSER: return {selecteduser:action.payload}
        default : return state
    }

}

export default UserReducer;