import { CreateUserDto } from "./dto/createUser.dto";
import { UsersService } from "./users.service";
import { User } from "./interfaces/user.interface";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getList(): Promise<User[]>;
    create(createUserDto: CreateUserDto): string;
}
