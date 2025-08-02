import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { ChatController } from './chat.controller'
import { ChatService } from './chat.service'
import { ChatRoom } from '../entities/chat-room.entity'
import { ChatMessage } from '../entities/chat-message.entity'
import { JwtStrategy } from '../strategies/jwt.strategy'

@Module({
  imports: [
    TypeOrmModule.forFeature([ChatRoom, ChatMessage]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-here',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [ChatController],
  providers: [ChatService, JwtStrategy],
  exports: [ChatService],
})
export class ChatModule {}
