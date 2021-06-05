import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE_POST,
} from "../constants/actionTypes";

const Posts = (posts = [], action: any) => {
  switch (action.type) {
    case CREATE:
      return [...posts, action.payload];
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
    case LIKE_POST:
      return posts.map((post: any) =>
        action.payload._id === post._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post: any) => action.payload !== post._id);
    default:
      return posts;
  }
};

export default Posts;
