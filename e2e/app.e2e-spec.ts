import { LeagueQueryPage } from './app.po';

describe('league-query App', () => {
  let page: LeagueQueryPage;

  beforeEach(() => {
    page = new LeagueQueryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
