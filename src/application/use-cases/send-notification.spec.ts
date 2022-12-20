import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a notification,',
      category: 'social',
      recipientId: 'Any-recipientId',
    });
    expect(notification).toBeTruthy();
  });
});
