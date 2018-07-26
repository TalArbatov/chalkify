const chalk = require('chalk');
const c = require('./console').c;


//const log = (text) => {console.log(text)}

const console = {
    log: (text) => {c(text)},
    warn: (text) => {c(chalk.bgYellow.black('WRN:') + ' ' + chalk.yellow(text))},
    error: (text) => {c(chalk.bgRed('ERR:') + ' ' + chalk.red(text))},
    success: (text) => {c(chalk.bgGreen.black('SUCCESS:') + ' ' + chalk.green(text))},


    red: (text) => {c(chalk.red(text))},
    green: (text) => {c(chalk.green(text))},
    yellow: (text) => {c(chalk.yellow(text))},
    blue: (text) => {c(chalk.blue(text))},
    cyan: (text) => {c(chalk.cyan(text))},
    white: (text) => {c(chalk.white(text))},
    grey: (text) => {c(chalk.grey(text))},
    black: (text) => {c(chalk.black(text))},
}

console.warn('Data sample overloading server...')
console.error('Cannot find specified path...')
console.success('User sucessfully registered!')





module.exports = console;