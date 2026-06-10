const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

// cek apakah folder data ada ?
// kalau tidak ada buat folder data
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

//Membuat file contact.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadContact = () => {
    const file = fs.readFileSync("data/contacts.json", 'utf-8');
    const contacts = JSON.parse(file);

    return contacts;
}


//menyimpan inputan ke data/contacts.json
const simpanContact = (nama, email, noHP) => {
    const contact ={nama, email, noHP};
    // const file = fs.readFileSync("data/contacts.json", 'utf-8');
    // const contacts = JSON.parse(file);
    const contacts = loadContact();

    //cek duplikat

    const duplikat = contacts.find((contact) => contact.nama === nama);
    if(duplikat){
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar gunakan nama lain!'));
        return false;
    }

    //check email

    if(email){
        if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold('Email tidak valid!'));
        return false;
        }
    }

    //check no HP

    if(!validator.isMobilePhone(noHP, 'id-ID')){
        console.log(chalk.red.inverse.bold('Nomor HP tidak valid!'));
        return false;
    }

    contacts.push(contact)
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log(chalk.green.inverse.bold('Terima kasih sudah menginputkan data'));
    console.log(duplikat);
};


const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.cyan.inverse.bold('Daftar Kontak : '));
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHP} `);
    });
}

const detailContact = (nama) => {
    const contacts = loadContact();
    
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

    if(!contact) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
        return false;
    }

    console.log(chalk.cyan.inverse.bold(contact.nama));
    console.log(contact.noHP);
    console.log(contact.email);

};

const deleteContact = (nama) => {
    const contacts = loadContact();

    const newContacs = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase());

    if(contacts.length === newContacs.length) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
        return false;
    }

    fs.writeFileSync("data/contacts.json", JSON.stringify(newContacs));
    console.log(chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus `));
};

//export 
module.exports = { simpanContact, listContact, detailContact, deleteContact };
