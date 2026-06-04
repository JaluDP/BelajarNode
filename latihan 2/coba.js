function cetakNama(nama){
    return `Halo nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : 'dany',
    umur : 33,
    cetakMhs(){
        return `Halo nama saya ${this.nama} saya ${this.umur} tahun`;
    },
};

class Orang {
    constructor(){
        console.log('Objek orang telah dibuat!!');
    }
}

//export satu-satu
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

//export secara objek
// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang,
// }

//export module secara objek lebih sederhana
module.exports = {cetakNama, PI, mahasiswa, Orang};