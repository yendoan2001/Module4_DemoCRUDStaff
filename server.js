const express = require('express');
const DBConnection = require("./src/databases/DBConnect");
const routerWeb = require("./src/routers/web.router");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
app.use('/',routerWeb);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
DBConnection.connect(err=>{
    if(err) throw err;
    else console.log('Oke');

})
app.listen(port,err=>{
    if(err) console.log(err);
    console.log(`Example app listening at http://localhost:${port}`);
});
