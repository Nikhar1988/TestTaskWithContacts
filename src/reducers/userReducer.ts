import { UserAction, UserActionTypes } from "../types"
import { UserStateType } from "../types"

const initialState: UserStateType  = {
    users: [],
    loading: false,
    error: null
}

export type RootState = ReturnType<typeof userReducer>

export const userReducer = (state:UserStateType = initialState, action:UserAction):UserStateType => {
    switch(action.type) {
        case UserActionTypes.FETCH_USERS:
            return {loading:true, error:null, users:[]}
        
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users:action.payload}
        
        case UserActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users:[]}
        
        default:
            return state
            
        }
}