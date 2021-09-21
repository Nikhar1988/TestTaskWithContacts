import { Dispatch } from "redux";
import UserService from "../service/UserService";
import { UserActionTypes, UserAction } from "../types";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS});
            const response = await UserService.getAllUsers();
            setTimeout(() => {
                    dispatch({
                        type: UserActionTypes.FETCH_USERS_SUCCESS,
                        payload: response
                    })}, 500)
        } catch (error) {
            dispatch(
                {type: UserActionTypes.FETCH_USERS_ERROR, 
                payload: 'Что-то пошло не так, ошибка блин!!!'
            })
        }
    }
}