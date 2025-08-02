import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm'

@Entity('chat_rooms')
export class ChatRoom {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ nullable: true })
  description: string

  @Column('uuid')
  createdBy: string

  @Column('simple-array')
  participants: string[]

  @Column('uuid', { nullable: true })
  songId: string

  @Column('uuid', { nullable: true })
  lastMessageId: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany('ChatMessage', 'chatRoom')
  messages: any[]

  @ManyToOne('ChatMessage', { nullable: true })
  @JoinColumn({ name: 'lastMessageId' })
  lastMessage: any
}
