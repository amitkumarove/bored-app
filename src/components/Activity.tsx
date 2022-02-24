import React, {useEffect} from "react";
import { Link } from 'react-router-dom';

import '../assets/css/style.css';

import { useDispatch, useSelector } from "react-redux";
import {fetchPost,addactivity,removeactivity,fetchPostToAdd} from "../store/actions";

const Activity = (props : any) => {

  const dispatch = useDispatch();
  const currentPost = useSelector((state:any) =>state.currentPost);
  const allposts = useSelector((state:any) =>state.posts);



  useEffect(()=> {
    dispatch(fetchPost())
  },[]);

 
  
  if(currentPost){
    var activity:any = <div className="activityCard">
    <h1>{currentPost.activity}</h1>
    <h3>{currentPost.type}</h3>
    <h6>Price : {currentPost.price}</h6>
  </div> 
  }


let activityListPageBtn = null;
if(allposts.length > 0){
  activityListPageBtn = <Link className="activityListBtn" to="/activitylist">Activity List</Link>
}

    return (
        <div className="container">
        <div className="activityWrapper">
       
        {activity}
          
          <a href="#" className="leftSwap" onClick={()=>dispatch(fetchPost())}>Left Swap</a>
          <a href="#" className="rightSwap" onClick={()=>dispatch(fetchPostToAdd())}>Right Swap</a>
        </div>
        {activityListPageBtn}
        </div>
      );

}
export default Activity;
