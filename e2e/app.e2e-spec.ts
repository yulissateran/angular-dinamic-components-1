import { AngularNgBootstrapPage } from './app.po';

describe('angular-ng-bootstrap App', () => {
  let page: AngularNgBootstrapPage;

  beforeEach(() => {
    page = new AngularNgBootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
