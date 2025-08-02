import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'

@Entity('chat_messages')
export class ChatMessage {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('text')
  content: string

  @Column('uuid')
  senderId: string

  @Column('uuid')
  chatRoomId: string

  @Column({ default: 'text' })
  messageType: 'text' | 'rights_grant' | 'system'

  @Column('jsonb', { nullable: true })
  metadata: any

  @Column('jsonb', { default: [] })
  readBy: Array<{ userId: string; readAt: Date }>

  @CreateDateColumn()
  createdAt: Date

  @ManyToOne('ChatRoom', 'messages', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'chatRoomId' })
  chatRoom: any
}
