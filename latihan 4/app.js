const validator = require('validator');
const chalk = require('chalk');
// console.log(validator.isEmail('jadwip@gmail.com'));
// console.log(validator.isMobilePhone('08123456789','id-ID'));
// console.log(validator.isNumeric('0812345678'));

// console.log(chalk.italic.bgBlueBright.black('Hello World!'));
const nama = 'jalu';
const pesan = chalk`Lorem, ipsum dolor {bgGreen.black.bold sit amet} consectetur {bgMagenta.italic.white adipisicing} elit. Distinctio, similique. nama saya : ${nama}`;
console.log(pesan);