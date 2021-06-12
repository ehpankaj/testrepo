import path from 'path';
import express from 'express';

const app = express()
const publicDirPath = path.join(__dirname, './public')

app.use(express.static(publicDirPath, {extensions: ['html']}))

app.get('/js/app.js',function(req,res){
    res.sendFile(path.join(__dirname + '/src/app.js')); 
});

app.listen(3000, () => {
    console.log('Server is up and running on PORT 3000.')
})