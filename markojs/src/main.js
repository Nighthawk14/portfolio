const main = require('./components/main.marko');

main.renderSync({ name: 'App' }).appendTo(document.body.querySelector('#main'));
