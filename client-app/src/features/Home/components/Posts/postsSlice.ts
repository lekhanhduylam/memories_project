import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import * as api from '../../../../api';
// import type { RootState } from "../store";

interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'failed';
}

export interface Post {
  creator: string;
  image: string;
  title: string;
  message: string;
  tags: string;
  selectedFile: string;
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
};

export const fetchPosts = createAsyncThunk('posts/fetchAllPost', async () => {
  const { data } = await api.fetchPosts();
  const posts = data as Post[];
  return posts;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchPosts.pending, (state: PostsState) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state: PostsState, action: any) => {
        state.status = 'idle';
        if (action.payload) {
          state.posts = [...action.payload];
        }
      });
  },
});

export const selectPost = (state: RootState) => state.posts;

export default postsSlice.reducer;
