import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user /* means exist */ && user.password === pass) {
          const  { password, ...result } = user; /* this line confusing me !! */
          return result;
        }
        return null;
      }
}
