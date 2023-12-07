import { Body, Controller, Get, Post, UseFilters } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UsersService } from "./users.service";
import { User } from "./interfaces/user.interface";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get("getList")
  async getList(): Promise<User[]> {
    return this.usersService.getList();
  }

  @Post("create")
  create(@Body() createUserDto: CreateUserDto) {
    return "create";
  }
}
