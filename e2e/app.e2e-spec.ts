import { Angular2ProbeerselPage } from './app.po';

describe('angular2-probeersel App', () => {
  let page: Angular2ProbeerselPage;

  beforeEach(() => {
    page = new Angular2ProbeerselPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
