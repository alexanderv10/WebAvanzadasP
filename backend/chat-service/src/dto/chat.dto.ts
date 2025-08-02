import { IsString, IsOptional, IsArray, IsEnum } from 'class-validator'

export class CreateChatRoomDto {
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  description?: string

  @IsString()
  createdBy: string

  @IsArray()
  @IsString({ each: true })
  participants: string[]

  @IsOptional()
  @IsString()
  songId?: string
}

export class SendMessageDto {
  @IsString()
  chatRoomId: string

  @IsString()
  content: string

  @IsOptional()
  @IsEnum(['text', 'rights_grant', 'system'])
  messageType?: 'text' | 'rights_grant' | 'system'

  @IsOptional()
  metadata?: any
}

export class GrantRightsDto {
  @IsString()
  chatRoomId: string

  @IsString()
  songId: string

  @IsString()
  songTitle: string

  @IsString()
  grantedTo: string

  @IsString()
  rightsType: string

  @IsOptional()
  @IsString()
  terms?: string
}
