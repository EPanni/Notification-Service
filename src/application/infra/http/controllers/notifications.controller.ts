import { Body, Controller, Post } from '@nestjs/common';

import { CreateNotificationsBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  @Post()
  async create(@Body() body: CreateNotificationsBody) {
    const { recipientId, content, category } = body;
  }
}
