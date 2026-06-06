const fs = require('fs');
const readline = require('readline');
//buat interface input dan output
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

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

//fungsi pertanyaan secara promise
const tulisPertanyaan = (pertanyaan) =>{
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan , (nama) => {
            resolve(nama);
        });
    });
};

//menyimpan inputan ke data/contacts.json
const simpanContact = (nama, email, noHP) => {
    const contact ={nama, email, noHP};
    const file = fs.readFileSync("data/contacts.json", 'utf-8');
    const contacts = JSON.parse(file);
    contacts.push(contact)
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log('Terima kasih sudah menginputkan data');
    rl.close();
};

//export 
module.exports = {
    tulisPertanyaan, simpanContact
}
