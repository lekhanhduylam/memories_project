import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
import { Post } from "../slices/postsSlice";


export const fetchPosts = createAsyncThunk("posts/fetchAllPost", async () => {
  const { data } = await api.fetchPosts();
  console.log("gothere", data);
  const posts = data as Post[];
  console.log(`posts`, posts);;
  return posts;
});