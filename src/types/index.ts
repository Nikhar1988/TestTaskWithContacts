

export interface UserStateType  {
       users: any[] ,
       loading: boolean,
       error: null | string 
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export interface UserState {
    users: any[],
    loading: boolean,
    error: null | string
};

 interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS
}

 interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: Array<any>
}


 interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction



export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: UserAddressType,
    phone: string,
    website: string,
    company:  UserCompanyType 
  }

    type UserCompanyType = {
        name: string,
        catchPhrase: string,
        bs: string
    }
    type UserAddressType = {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: UserGeoType
    }
    type UserGeoType = {
        lat: string,
        lng: string
        }
    
    export type ChangeUserType = {
            key: number,
            name: string,
            email: string,
            phone: string,
            address: string


        }