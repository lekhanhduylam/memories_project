import * as api from "../api";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE_POST,
} from "../constants/actionTypes";

export const getPosts = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (newPost: any) => async (dispatch: any) => {
  try {
    const { data } = await api.creatPost(newPost);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id: any, post: any) => async (dispatch: any) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id: any) => async (dispatch: any) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id: any) => async (dispatch: any) => {
  try {
    const { data } = await api.likePost(id);
    console.log({ data });
    dispatch({ type: LIKE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
