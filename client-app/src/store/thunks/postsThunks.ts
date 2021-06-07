import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
import { PostsState } from "../slices/postsSlice";

export const fetchPosts = createAsyncThunk("posts/fetchAllPost", async () => {
  const { data } = await api.fetchPosts();

  return data as PostsState[];
});
