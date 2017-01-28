import { TodoAgainPage } from './app.po';

describe('todo-again App', function() {
  let page: TodoAgainPage;

  beforeEach(() => {
    page = new TodoAgainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
