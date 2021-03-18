import { Module } from '@nestjs/common';
import { UserModule } from "../users/users.module";
import { AuthService } from "./auth.service";
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [UserModule, PassportModule],
    providers: [AuthService, LocalStrategy],

})
export class AuthModule {

}
