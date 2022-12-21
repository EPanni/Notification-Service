import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Notification } from '../entities/notification/notification';
import { SendNotification } from './send-notification';

const notificationsRepository = {
  async create(notification: Notification) {
    console.log(notification);
  },
};

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification,',
      category: 'social',
      recipientId: 'Any-recipientId',
    });
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
