import { browser, by, element } from 'protractor';

export class Angular2ProbeerselPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.sass('app-root h1')).getText();
  }
}
