
import { ChangeUserType, UserType } from "../types";

export default class UserService {
        static getUsers = async (request: string='https://jsonplaceholder.typicode.com/users' ): Promise<Array<UserType>> => {
                const response = await fetch(request); 
                const body = await response.json();
                return body; // массив с объектами   
              }


              static getAllUsers = async (): Promise<ChangeUserType[]> => {
                const res = await this.getUsers();
                return res.map(this._changeUsers)
           
              }; 

              static _changeUsers =(user: UserType)=> {
                    const address = user.address;
                    return { 
                            key: user.id,
                            name: user.name,
                            email: user.email,
                            phone: user.phone,
                            address: `City: ${address.city}, Street:${address.street}, Suite:${address.suite}`
                    }
        }  

};
    
    
    
