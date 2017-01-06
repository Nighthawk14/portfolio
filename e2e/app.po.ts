import { browser, element, by } from 'protractor/globals';

export class PortfolioPage {
  navigateTo() {
    return browser.get('/');
  }

  getLogo() {
    return element(by.css('#logo'));
  }
}
