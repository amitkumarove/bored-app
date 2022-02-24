import { AddACTIVITY, REMOVEACTIVITY, GET_POST } from "./actionsName";

const initialState = { currentPost : null , posts: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case AddACTIVITY:
      let tempPostArr = state.posts;
      tempPostArr.push(action.payload);
      console.log(tempPostArr);
      return { ...state, posts : tempPostArr,currentPost:action.payload };
    case REMOVEACTIVITY:
      let temArr = state.posts.filter(posts => {return posts.key!==action.payload})
      console.log("remove",temArr)
      return { ...state, posts: temArr};
    case GET_POST:
      console.log("action",action.payload);
      return { ...state, currentPost: action.payload };
    default:
      return state;
  }
}

export default reducer;
