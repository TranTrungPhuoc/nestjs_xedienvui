import { Injectable } from "@nestjs/common";
import { User } from "./interfaces/user.interface";

@Injectable()
export class UsersService{
    private readonly users: User[] = [];

    getList(): User[]{
        return this.users;
    }

    create(user: User){
        this.users.push(user)
    }
}