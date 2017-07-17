import { BIECLIENTPage } from './app.po';

describe('bie-client App', () => {
  let page: BIECLIENTPage;

  beforeEach(() => {
    page = new BIECLIENTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
