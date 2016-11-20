import { AthleticsNotificationsPage } from './app.po';

describe('athletics-notifications App', function() {
  let page: AthleticsNotificationsPage;

  beforeEach(() => {
    page = new AthleticsNotificationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
