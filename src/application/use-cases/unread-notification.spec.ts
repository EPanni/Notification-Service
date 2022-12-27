import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Notification } from '../entities/notification/notification';
import { NotificationNotFound } from './errors/notification-not-found-error';
import { makeNotification } from '../../../test/factories/notification-factory';
import { UnreadNotification } from './unread-notification';
import { read } from 'fs';

const notificationsRepository = {
  async create(notification: Notification) {
    console.log(notification);
  },
};

describe('Unread notification', () => {
  it('Should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({ readAt: new Date() });

    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull;
  });

  it('Should not be able to read a non existing notification', () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
