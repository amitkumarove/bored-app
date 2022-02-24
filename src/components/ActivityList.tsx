import React, {useEffect}  from "react";
import { Link } from 'react-router-dom';

import '../assets/css/style.css';

import { useDispatch, useSelector } from "react-redux";
import {fetchPost,addactivity,removeactivity,fetchPostToAdd} from "../store/actions";

const ActivityList = () => {

  const dispatch = useDispatch();
  const posts = useSelector((state:any) =>state.posts);


var activityList = null;
  if(posts){
     activityList = posts.map((post:any)=>{
      return <>
      <tr>
    <td>{post.activity}</td>
    <td>{post.type}</td>
    <td>{post.price}</td>
    <td><a href="#" className="removeActivityBtn" onClick={()=>dispatch(removeactivity(post.key))}>Remove</a></td>
    </tr>
      </>
    })
    
  }


    return (
        <div className="container">
          <div className="activityTabelWrap">
          <table>
            <tr>
              <th>Activity</th>
              <th>Type</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
           {activityList}
          </table>
          <Link className="activityBackBtn" to="/">Back to Activity</Link>
        </div>
        </div>
      );

}
export default ActivityList;