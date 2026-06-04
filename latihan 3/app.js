//core module
//File system

const fs = require('fs');

// menuliskan string ke file (synchronous)
// try{
//     fs.writeFileSync('data/test.txt', 'Hello World secara synchronous!');
// }catch(e){
//     console.log(e);
// }


// menuliskan string ke file secara Asyncronous
// fs.writeFile('data/test.txt', 'Hello World Secara Asyncronous', (err) =>{
//     console.log(err);
// });


// membaca isi file synchronous
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// membaca isi file Asynchronous
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if(err) throw err; 
//     console.log(data);
// })

//Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan nomor HP anda :', (noHP) => {
        const contact ={nama, noHP}
        const file = fs.readFileSync("data/contacts.json", 'utf-8');
        const contacts = JSON.parse(file);
        contacts.push(contact)
        fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
        console.log('Terima kasih sudah menginputkan data');
        rl.close();
    });
});