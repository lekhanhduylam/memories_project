import { AUTH } from '../constants/actionTypes'
import * as api from '../api'
import { useDispatch } from 'react-redux'

export const signin = (formData, history) => async (dispatch) => {
    try {

        history.push('/')
    } catch (error) {
        console.error(error)
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {

        history.push('/')
    } catch (error) {
        console.error(error)
    }
}