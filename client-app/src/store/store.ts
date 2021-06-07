import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/auth";
import postsReducer from "../reducers/posts";
// ...

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;