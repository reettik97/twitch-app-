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

export const createStream = (formValue) => async (dispatch) => {
  const responce = await streams.post("/streams", formValue);
  dispatch({
    type: CREATE_STREAM,
    payload: responce.data,
  });
};

export const fetchStreams = () => async (dispatch) => {
  const responce = await streams.get("/streams",);
  dispatch({
    type: FETCH_STREAMS,
    payload: responce.data,
  });
};

export const fetchStream = (id) => async (dispatch) => {
  const responce = await streams.post(`/streams/${id}`);
  dispatch({
    type: FETCH_STREAM,
    payload: responce.data,
  });
};

export const editStream  = (id , formValue) => async dispatch =>{
  const responce = await streams.put(`/streams/${id}` , formValue);
  dispatch({
     type : EDIT_STREAM,
     payload : responce.data
  })
}

export const deleteStream  = (id) => async dispatch =>{
  await streams.delete(`/streams/${id}`);
  dispatch({
     type : DELETE_STREAM,
     payload : id
  })
}

