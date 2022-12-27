import { Content } from '../../src/application/entities/notification/content';
import {
  Notification,
  NotificationProps,
} from '../../src/application/entities/notification/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('New friendship request'),
    recipientId: 'recipient-2',
    ...override,
  });
}
