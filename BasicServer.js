const http = require("http") // built in  module. no need to give path
var express = require("express"); // npm package
var cors = require('cors');


var app = express();
app.use(cors());

const hostname = '127.0.0.1';
const port = 3000;

app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:__dirname}); // current executing folder
})

app.get('/products',(req,res)=>{
    var products = [
        {name:'Laptop',price: 3000},
        {name:'Mobile', price: 35000},
        {name: 'Television', price: 56000},
    ]

    res.json(products); // converts to Json

});

app.get('/products/:id',(req,res)=>{   // request parameters
    var products = [
        {id:1,name:'Laptop',price: 3000},
        {id:2,name:'Mobile', price: 35000},
        {id:3,name: 'Television', price: 56000},
    ]
    console.log(req.params.id)
    res.json(products);

});

app.get('/Courses',(req,res)=>{
  var courses = [
     {name: "Java", image: "https://cdn.iconscout.com/icon/free/png-256/java-23-225999.png", likes: 50, duration: 2},
     {name: "Angular", image: "https://angular-school-deploy.s3.amazonaws.com/images/the_A_gif-1c1149415fb6c5d83c38989f169d7630.gif", likes: 100, duration: 3},
     {name: "Node", image: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png", likes: 200, duration: 5},
     {name: "Redux", image: "https://cdn-images-1.medium.com/max/1200/0*U2DmhXYumRyXH6X1.png", likes: 300, duration: 3},
     {name: ".Net", image: "https://www.cloudmqtt.com/images/dotnet.png", likes: 250, duration: 2}
  ]
  res.json(courses);
})



// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader("Content-Type",'text/html');
//     res.end('<h1>Hello World</h1>');
// });

app.listen(port,hostname,()=>{
    console.log("Server running at http://"+hostname);
})