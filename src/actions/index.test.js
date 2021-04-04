import moxios from 'moxios'

describe('get secret word', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('secret word is returnd' , () => {

    });
});