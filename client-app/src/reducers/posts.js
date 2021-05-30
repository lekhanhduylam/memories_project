import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE_POST } from '../constants/actionTypes'

const Posts = (posts = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...posts, action.payload]
        case FETCH_ALL:
            return action.payload
        case UPDATE:
        case LIKE_POST:
            return posts.map((post) => action.payload._id === post._id ? action.payload : post)
        case DELETE:
            return posts.filter((post) => action.payload !== post._id)
        default:
            return posts
    }
}

export default Posts