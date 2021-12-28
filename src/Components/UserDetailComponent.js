import {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {useSelector,useDispatch} from 'react-redux';

import api_call from './API_Call';
import CONSTANTS from '../Redux/Constants';

import PostReducer from '../Redux/Reducers/PostReducer';
import {userPostsAction} from '../Redux/Actions/UserAction';

import PostComponent from './PostComponent';


const UserDetailComponent=()=>{
    const [userDetail,updateUserDetail]=useState([]);
    const [userPosts,updateUserPosts]=useState([]);

    const dispatch=useDispatch();

    const user=useSelector((state)=>state.user);
    //console.log('selecteduser'); console.log(user);
    const userid=user.selecteduser;

    const post=useSelector((state)=>state.post);
    //console.log('post');console.log(post);
    

    useEffect(()=>{
        const url=CONSTANTS.API_URL+'users/'+userid;
        //console.log(url);
        api_call(url).then(res=>{
            updateUserDetail(prestate=>{
                //return{...prestate,userDetail:res}
                return{...res}
            })
            //console.log('userDetail');console.log(userDetail);
            const url_post=CONSTANTS.API_URL+'users/'+userid+'/posts';
            //console.log(url);
            api_call(url_post).then(res=>{
                updateUserPosts(prestate=>{
                    //return{...prestate,userDetail:res}
                    return{...res}
                })
                //console.log('userPosts');console.log(userPosts);
            });

        });

    },[userid]);

    useEffect(()=>{
        dispatch(userPostsAction(userPosts))
    },[userPosts])

    return(
        <>
            <h2>User Detail</h2>
            <p>User ID: {user.selecteduser}</p>
            {
                userDetail.name ? 
                    <>
                    <p>User Name: {userDetail.name}</p>
                    <p>User Email: {userDetail.email}</p>
                    <PostComponent />
                    </>
                : <></> 
            }
            </> 
        )
}   
//export default connect(null,null)(UserDetailComponent);
export default UserDetailComponent;