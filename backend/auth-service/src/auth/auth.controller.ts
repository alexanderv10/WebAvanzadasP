import { Controller, Post, Body, HttpCode, HttpStatus, Get, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterDto, LoginDto } from '../dto/auth.dto'
import { JwtAuthGuard } from '../guards/jwt-auth.guard'
import { GetUser } from '../decorators/get-user.decorator'

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto)
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout() {
    return { message: 'Logout exitoso' }
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getMe(@GetUser('sub') userId: string) {
    const user = await this.authService.validateUser(userId)
    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado')
    }
    return {
      id: user.id,
      email: user.email,
      isEmailVerified: user.isEmailVerified
    }
  }
}