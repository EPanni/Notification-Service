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

  //   it('Should not be able to create a notification content with less than 5 characters', () => {
  //     expect(() => new Content('aaa')).toThrow();
  //   });

  //   it('Should not be able to create a notification content with more than 240 characters', () => {
  //     expect(() => new Content('a'.repeat(241))).toThrow();
  //   });
});
