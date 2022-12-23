import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('Should be able to create a notification', () => {
    expect(
      () =>
        new Notification({
          content: new Content('New friendship request'),
          category: 'social',
          recipientId: 'example-recipient-id',
        }),
    ).toBeTruthy();
  });
});
