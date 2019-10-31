import { checkVisibleText, checkNotVisibleText, } from './functions/checkTextFunctions'

describe('Main page testing', () => {
  it('should have welcome screen', async () => {
    await checkVisibleText('React Native said HELLO!');
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await checkVisibleText('Hello!!!');
  });

  it('should show world screen after tap', async () => {
    await element(by.text('Press me')).tap();
    await checkVisibleText('Simple Button pressed');
    await element(by.text('OK')).tap();
    await checkNotVisibleText('Simple Button pressed');
  });
});
