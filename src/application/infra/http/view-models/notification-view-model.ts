import { Notification } from '@application/entities/notification/notification';

export class NotificationViewModel {
  static toHttp(notification: Notification) {
    return {
      id: notification.id,
      content: notification.id,
      category: notification.category,
      recipientId: notification.recipientId,
    };
  }
}
