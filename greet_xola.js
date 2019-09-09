const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');
const figlet = require('figlet')



figlet(greet('Xola'), function (err, data) {

    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    const styledMessage = chalk.bgRed.black(data);
    console.log(styledMessage)
});



