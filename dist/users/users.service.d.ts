import { User } from "./interfaces/user.interface";
export declare class UsersService {
    private readonly users;
    getList(): User[];
    create(user: User): void;
}
