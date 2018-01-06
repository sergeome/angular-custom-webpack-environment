import { AppPage } from './app.po';

describe('Angular Webpack Default', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello from Angular App with Webpack');
  });
});
