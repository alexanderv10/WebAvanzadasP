import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ChatRoom } from '../entities/chat-room.entity'
import { ChatMessage } from '../entities/chat-message.entity'
import { CreateChatRoomDto, SendMessageDto, GrantRightsDto } from '../dto/chat.dto'

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatRoom)
    private chatRoomRepository: Repository<ChatRoom>,
    @InjectRepository(ChatMessage)
    private chatMessageRepository: Repository<ChatMessage>,
  ) {}

  async createChatRoom(createChatRoomDto: CreateChatRoomDto) {
    const chatRoom = this.chatRoomRepository.create({
      name: createChatRoomDto.name,
      description: createChatRoomDto.description,
      createdBy: createChatRoomDto.createdBy,
      participants: createChatRoomDto.participants,
      songId: createChatRoomDto.songId,
    })

    return await this.chatRoomRepository.save(chatRoom)
  }

  async findUserChatRooms(userId: string, page: number = 1, limit: number = 10) {
    const [chatRooms, total] = await this.chatRoomRepository.findAndCount({
      where: { createdBy: userId },
      order: { updatedAt: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    })

    return {
      data: chatRooms,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    }
  }

  async sendMessage(userId: string, sendMessageDto: SendMessageDto) {
    const chatRoom = await this.chatRoomRepository.findOne({
      where: { id: sendMessageDto.chatRoomId }
    })

    if (!chatRoom) {
      throw new NotFoundException('Chat room not found')
    }

    // Verificar si el usuario puede enviar mensajes en este chat
    if (chatRoom.createdBy !== userId && !chatRoom.participants.includes(userId)) {
      throw new ForbiddenException('You are not allowed to send messages in this chat')
    }

    const message = this.chatMessageRepository.create({
      content: sendMessageDto.content,
      senderId: userId,
      chatRoomId: sendMessageDto.chatRoomId,
      messageType: sendMessageDto.messageType || 'text',
    })

    const savedMessage = await this.chatMessageRepository.save(message)

    // Actualizar la última actividad del chat room
    await this.chatRoomRepository.update(chatRoom.id, {
      updatedAt: new Date(),
      lastMessageId: savedMessage.id
    })

    return savedMessage
  }

  async getChatMessages(roomId: string, userId: string, page: number = 1, limit: number = 20) {
    const chatRoom = await this.chatRoomRepository.findOne({
      where: { id: roomId }
    })

    if (!chatRoom) {
      throw new NotFoundException('Chat room not found')
    }

    // Verificar acceso
    if (chatRoom.createdBy !== userId && !chatRoom.participants.includes(userId)) {
      throw new ForbiddenException('You do not have access to this chat room')
    }

    const [messages, total] = await this.chatMessageRepository.findAndCount({
      where: { chatRoomId: roomId },
      order: { createdAt: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    })

    return {
      data: messages.reverse(), // Mostrar en orden cronológico
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    }
  }

  async markMessagesAsRead(roomId: string, userId: string) {
    const chatRoom = await this.chatRoomRepository.findOne({
      where: { id: roomId }
    })

    if (!chatRoom) {
      throw new NotFoundException('Chat room not found')
    }

    return { success: true }
  }

  async grantRightsInChat(userId: string, grantRightsDto: GrantRightsDto) {
    const chatRoom = await this.chatRoomRepository.findOne({
      where: { id: grantRightsDto.chatRoomId }
    })

    if (!chatRoom) {
      throw new NotFoundException('Chat room not found')
    }

    if (chatRoom.createdBy !== userId) {
      throw new ForbiddenException('Only room creator can grant rights')
    }

    // Crear mensaje especial para el otorgamiento de derechos
    const message = this.chatMessageRepository.create({
      content: `Rights granted for song: ${grantRightsDto.songTitle}`,
      senderId: userId,
      chatRoomId: grantRightsDto.chatRoomId,
      messageType: 'rights_grant',
      metadata: {
        songId: grantRightsDto.songId,
        rightsType: grantRightsDto.rightsType,
        grantedTo: grantRightsDto.grantedTo,
        terms: grantRightsDto.terms
      }
    })

    return await this.chatMessageRepository.save(message)
  }

  async getUnreadCount(userId: string) {
    return { unreadCount: 0 }
  }
}
