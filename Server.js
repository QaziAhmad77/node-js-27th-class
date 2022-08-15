// const express = require("express");  // express se jo b export hoga wo edr express variable me save hojaye ga
// ye hamee ak funciton dega or jb hm is function ko run kare to os se jo return hoga wo hm app variable ko de de denge
// or app variable se jo return hota he wo object hota he

// const app = express();

// app.get("/",function(req,res,next){
//     res.status(200).send("<h1>Welcom to the Express APp</h1>")
// })
// app.get("/users", function (req,res,next) {
//     const users = ["Wajid","Azmat","Kami bhai"];
//     res.status(200).send(users);
// })

// app.listen(4000);



// const express = require("express"); 

// const app = express();

// const user = "Authenticated";      // const user = "";

// app.use("/",function(req,res,next){
//     console.log("App is working")
//     if(user === "Authenticated"){
//         next()
//     }else{
//         res.status(401).send("You are not authorized")
//     }
// })
// app.get("/ussers", function (req,res,next) {
//     const users = ["Wajid","Azmat","Kami bhai"];
//     res.status(200).send(users);
// })

// app.listen(4000);



// const express = require("express"); 

// const app = express();

// app.use(express.json());      // ye har request pe run hoga or ye apne ap k baad wale middle where ko b chalaye ga
// app.use(express.urlencoded({extended: false}));    // ye req.body ko json me convert kare ga (express.json)


// app.get("/",function(req,res){
//     res.status(200).send("<form  action ='/users' method = 'POST'><input name='user'><button>Submit</button></form>") 
// })

// app.get("/user", function (req,res,next) {
//     const users = ["Wajid","Azmat","Kami bhai"];
//     res.status(200).send(users);
// })
// app.post("/users",function(req,res,next){
//     console.log(req.body);
// })
// app.listen(4000);



// const express = require("express"); 
// const path = require("path")

// const app = express();

// app.use(express.json());      // ye har request pe run hoga or ye apne ap k baad wale middle where ko b chalaye ga
// app.use(express.urlencoded({extended: false}));    // ye req.body ko json me convert kare ga (express.json)
// const users = [];

// app.get("/",function(req,res){
//     res.sendFile(path.join(__dirname, "index.html")) //path.join ak path ko return karta he dirname dekta he k ye file
// })          // kaha pe para he oska absolut path deta he or or pir sendFile is ko send karta he

// app.post("/users",function(req,res,next){
//     users.push(req.body.user);
//     res.status(200).send(req.body.user);
// })

// app.get("/users", function (req,res,next) {
//     res.status(200).send(users);
// })

// app.use(function (req,res,next){
//     res.status(404).send("Endpoint not found")  // This will catch our error  // 404 mean k jis end point ko hm hit karah
// })                                                // e he wo server pe define nahe

// app.listen(4000);

