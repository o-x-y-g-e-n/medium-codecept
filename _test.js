    Feature('Google Landing Page');

    Scenario('Open Google', ({ I }) => {
        I.amOnPage('https://google.com'); // opens google.com
        I.seeElement('//*[@name="q"]');
        I.fillField({ css: "input[type=text]" }, "Github");
    });

    Scenario('Testing React Components', ({I}) => {
        I.amOnPage('https://ahfarmer.github.io/calculator/');
        I.click({ react: 't', props: { name: '2' }});
        I.click({ react: 't', props: { name: '+' }});
        I.click({ react: 't', props: { name: '3' }});
        I.click({ react: 't', props: { name: '=' }});
        I.seeElement({ react: 't', props: { value: '5' }});
    });
