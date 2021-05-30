import { AUTH, LOGOUT } from '../constants/actionTypes'

const Auth = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify(action?.data))
            return { ...state, authData: action?.data }
        case LOGOUT:
            localStorage.clear()
            return { ...state, authDataL: null }
        default:
            return state
    }
}

export default Auth