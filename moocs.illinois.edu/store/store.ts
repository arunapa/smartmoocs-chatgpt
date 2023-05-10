import { configureStore } from "@reduxjs/toolkit";
import difficultTopicsReducer from "./difficultTopics/slice";


export const store = configureStore({
  reducer: {
    dt: difficultTopicsReducer
  },
  devTools: process.env.NODE_ENV === "development"
})

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
