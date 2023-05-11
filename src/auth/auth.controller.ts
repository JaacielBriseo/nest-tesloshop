import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto, LoginUserDto } from './dto';
import { User } from './entities/user.entity';
import { AuthService } from './auth.service';
import { Auth, GetUser } from './decorators';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(@GetUser() user: User) {
    return this.authService.checkAuthStatus(user);
  }

  // @Get('private')
  // @UseGuards(AuthGuard())
  // testingPrivateRoute(
  //   @GetUser() user: User,
  //   @GetUser('email') userEmail: string,
  //   @Req() request: Express.Request,
  //   @RawHeaders() rawHeaders: string[],
  // ) {
  //   console.log({ request });
  //   return {
  //     ok: true,
  //     msg: 'Hello world from private',
  //     user,
  //     userEmail,
  //     rawHeaders,
  //   };
  // }

  // @Get('private2')
  // @RoleProtected(ValidRoles.superUser)
  // @UseGuards(AuthGuard(), UserRoleGuard)
  // privateRoute2(@GetUser() user: User) {
  //   return {
  //     ok: true,
  //     user,
  //   };
  // }

  // @Get('private3')
  // @Auth(ValidRoles.admin, ValidRoles.superUser)
  // privateRoute3(@GetUser() user: User) {
  //   return {
  //     ok: true,
  //     user,
  //   };
  // }
}
