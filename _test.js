Feature('');

Scenario('test something', ({ I }) => {

    I.amOnPage('https://google.com'); // opens google.com
    I.seeElement('//*[@name="q"]');
    I.fillField('//*[@name="q"]','Github');
});
