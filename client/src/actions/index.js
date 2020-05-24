import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
} from "./types";
import streams from "../api/streams";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValue) => async (dispatch , getState) => {
  const {userId} = getState().auth;
  const responce = await streams.post("/streams", {...formValue , userId} );
  dispatch({
    type: CREATE_STREAM,
    payload: responce.data,
  });
  //Do some programatic  navigator to get the user back to the root route
   history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const responce = await streams.get("/streams",);
  dispatch({
    type: FETCH_STREAMS,
    payload: responce.data,
  });
};

export const fetchStream = (id) => async (dispatch) => {
    const responce = await streams.get(`/streams/${id}`);
    dispatch({
      type: FETCH_STREAM,
      payload: responce.data,
    });
  } 


export const editStream  = (id , formValue) => async dispatch =>{
  const responce = await streams.patch(`/streams/${id}` , formValue);
  dispatch({
     type : EDIT_STREAM,
     payload : responce.data
  })
  history.push("/");
}

export const deleteStream  = (id) => async dispatch =>{
  await streams.delete(`/streams/${id}`);
  dispatch({
     type : DELETE_STREAM,
     payload : id
  })
  history.push("/");
}

