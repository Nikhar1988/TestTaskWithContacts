
import { UserStateType } from "../types";

export default class UserService {
        static getUsers = async (request: string='https://jsonplaceholder.typicode.com/users' ): Promise<Array<UserStateType>> => {
                const response = await fetch(request);
                 
                const body = await response.json();
                return body; // массив с объектами   
              }

        _changeUsers =(user: UserStateType)=> {
                const address = user.address;
                return { 
                        key: user.id,
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                        address: `City: ${address.city}, Street:${address.street}, Suite:${address.suite} `




                }
        }  

        };
    
    
    
