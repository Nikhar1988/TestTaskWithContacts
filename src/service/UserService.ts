import axios, { AxiosResponse } from "axios";
 

export default class UserService {
    static async getUsers(): Promise<AxiosResponse> {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    }
}