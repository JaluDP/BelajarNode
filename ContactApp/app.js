const yargs = require("yargs");
const contacts = require("./contacts");


yargs.command({
    command: 'add',
    describe: 'menambahkan contact baru',
    builder:{
        nama:{
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string' ,
        },
        email:{
            describe: "Email",
            demandOption: false,
            type: 'string',
        },
        noHP:{
            describe: "nomor Handphone",
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
});

yargs.parse();