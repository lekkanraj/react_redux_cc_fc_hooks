import React from 'react';
import {connect} from 'react-redux';

import CONSTANTS from '../Redux/Constants';
import api_call from './API_Call';

import currentUser from '../Redux/Actions/UserAction'

class UserComponents extends React.Component{

    constructor(props){
        super(props);
        this.state={users:[],isLoding:1};
        this.updateCurrentUser=this.updateCurrentUser.bind(this);
    }

    componentDidMount(){
        const url=CONSTANTS.API_URL+'users';
        const userList=api_call(url).then(data=>{
            this.setState(()=>({isLoding:0,users:data }))
            console.log(data);
        });
    }     
        //console.log(userList);
    updateCurrentUser(id){
        //alert(id);
       this.props.changeUsers(id);
    }
        
    

    render(){
        console.log("ReduxUserComp",this.props.currentUserID.selecteduser)
        return(
            <>
                <h1>User Component</h1>
                <span>Is Loading:{this.state.isLoding}</span>
                <span>Selected User:{this.props.currentUserID.selecteduser}</span>
                {
                this.state.users.map(
                    user=>(
                         <p key={user.id}>{user.name} <button onClick={()=>this.updateCurrentUser(user.id)}>Get Post</button></p>
                        )
                    )}
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return {currentUserID:state.user}
}

const mapDispatchtoProps=(dispatch)=>{
    return{
        changeUsers:(payload)=>{
            dispatch(currentUser(payload));
        }
    }
}


export default connect(mapStateToProps,mapDispatchtoProps)(UserComponents);