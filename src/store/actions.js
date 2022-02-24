import { AddACTIVITY, REMOVEACTIVITY, GET_POST } from "./actionsName";
import {http} from "../http";

export const addactivity = (object) => {
  return { type: AddACTIVITY, payload: object };
};
export const fetchPostToAdd = () => {
  
  return function (dispatch) {
    http.get('/activity').then(response => {
      //console.log("one",response);
      dispatch(addactivity(response.data));
    });
  }
}

export const removeactivity = (activityKey) => {
  return { type: REMOVEACTIVITY, payload: activityKey };
};


export const getPost = (data) => {
  return { type: GET_POST, payload: data};
}
export const fetchPost = () => {
  
  return function (dispatch) {
    http.get('/activity').then(response => {
      //console.log("one",response);
      dispatch(getPost(response.data));
    });
  }
}