
import IUser from "@src/model/user";

export default class UserController {

    private user: IUser[] = [];


    public User(newUser: IUser): IUser | undefined {
        if (newUser) {
            const user: IUser = {
                ...newUser
            }
            user.id = this.user.length + 1;
            this.user.push(user);
            return user;
        }
        else
            return undefined
    }

    public GetUser(id: number): IUser | undefined {
        return this.user.find(user => user.id === (id === undefined ? 0 : +id))
    }
}