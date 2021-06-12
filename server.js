import path from 'path';
import express from 'express';

const app = express()
const publicDirPath = path.join(__dirname, './public')

app.use(express.static(publicDirPath, {extensions: ['html']}))

app.get('/js/app.js',(req,res) => {
    console.log(req.query);
    res.send([{name: 'dsff', age: 'fdsfdsfds'},{name: 'dsff', age: 'fdsfdsfds'},{name: 'dsff', age: 'fdsfdsfds'},{name: 'dsff', age: 'fdsfdsfds'}]); 
});

app.listen(3000, () => {
    console.log('Server is up and running on PORT 3000.')
})