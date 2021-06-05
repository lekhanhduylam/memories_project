import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin =
  (formData: any, history: any) => async (dispatch: any) => {
    try {
      const { data } = await api.signIn(formData);
      dispatch({ type: AUTH, data });

      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

export const signup =
  (formData: any, history: any) => async (dispatch: any) => {
    try {
      const { data } = await api.signUp(formData);
      dispatch({ type: AUTH, data });

      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };
