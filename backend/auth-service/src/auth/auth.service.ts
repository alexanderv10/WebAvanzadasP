import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs'
import { User } from '../entities/user.entity'
import { RegisterDto, LoginDto } from '../dto/auth.dto'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, password, firstName, lastName, username } = registerDto

    const existingUser = await this.userRepository.findOne({ where: { email } })
    if (existingUser) {
      throw new ConflictException('El email ya está registrado')
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = this.userRepository.create({
      email,
      password: hashedPassword,
    })

    const savedUser = await this.userRepository.save(user)

    // TODO: Enviar evento para crear perfil en User Service
    console.log('TODO: Crear perfil de usuario:', { firstName, lastName, username, userAuthId: savedUser.id })

    const payload = { sub: savedUser.id, email: savedUser.email }
    const token = this.jwtService.sign(payload)

    return {
      user: {
        id: savedUser.id,
        email: savedUser.email,
        firstName,
        lastName,
        username
      },
      token,
      message: 'Usuario registrado exitosamente'
    }
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto

    const user = await this.userRepository.findOne({ where: { email } })
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas')
    }

    const payload = { sub: user.id, email: user.email }
    const token = this.jwtService.sign(payload)

    return {
      user: {
        id: user.id,
        email: user.email,
      },
      token,
      message: 'Login exitoso'
    }
  }

  async validateUser(userId: string) {
    return this.userRepository.findOne({ where: { id: userId } })
  }
}