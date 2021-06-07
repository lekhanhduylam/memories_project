import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { fetchPosts } from "../thunks/postsThunks";
export interface PostsState {
  creator: string;
  image: string;
  title: string;
  message: string;
}

const initialState: PostsState = {
  creator: "",
  image: "",
  title: "",
  message: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchAll: (state, action: PayloadAction<any>) => {},
  },
});

export const selectPost = (state: RootState) => state.posts.value;

export default postsSlice.reducer;
