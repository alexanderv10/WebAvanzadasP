import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { SongsController } from './songs.controller'
import { SongsService } from './songs.service'
import { Song } from '../entities/song.entity'
import { JwtStrategy } from '../strategies/jwt.strategy'

@Module({
  imports: [
    TypeOrmModule.forFeature([Song]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-here',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [SongsController],
  providers: [SongsService, JwtStrategy],
  exports: [SongsService],
})
export class SongsModule {}
