'use strict';
const alexia = require('..');
const app = alexia.createApp('AsyncResponseExample');

app.intent('AsyncIntent', 'async', (slots, attrs, done) => {
    setTimeout(() => {
        done('Response here');
    }, 120);
});

module.exports = app;