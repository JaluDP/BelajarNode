const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');

//Thisrd-party Middleware
app.use(expressLayouts);
app.use(morgan('dev'));

//Application level middleware
app.use((req, res, next) => {
    console.log('Time: ',Date.now());
    next();
});

//built-in middleware
app.use(express.static('public'));


app.get('/', (req, res) => {
    // res.sendFile('./index.html', {root: __dirname });
    const mahasiswa = [
        {
            nama: 'Jalu Dwi',
            email: 'jadwip@gmail.com',
        },
        {
            nama: 'Dwi Hartanto',
            email: 'dwiha@gmail.com',
        },
        {
            nama: 'Purwa atmaja',
            email: 'purat@gmail.com',
        },
    ]
    res.render('index', { 
        nama: 'Jalu Dwi', 
        title: 'Halaman Home',
        mahasiswa,
        layout: 'layouts/main-layout',
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact'});
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});

app.use((req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
