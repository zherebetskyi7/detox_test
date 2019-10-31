import { checkVisibleText, checkNotVisibleText, } from './functions/checkTextFunctions'

describe('Friends screen testing', () => {
    it('After tap on AddSomeFriends user navigates to Friends screen', async () => {
        await element(by.id('friends_screen')).tap();
        await checkVisibleText('This is Friends Page');
    });
});