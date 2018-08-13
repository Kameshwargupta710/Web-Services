var express = require('express');
var exp = express();
var cors = require('cors');
var fs = require('fs');
var parser = require('body-parser');
var data=require('./demo.json')


exp.use(cors())


exp.get('/rest/api/load',cors(),(req, res)=>{
   console.log("Load Invoked");
   res.send({msg:"GIVE SOME "});

});

exp.route('/rest/api/get',cors()).get((req, res)=>{
   console.log("GET Invoked");
   res.write(JSON.stringify(data));
   //console.log(data);
   res.end();
});

exp.use(parser.json());
exp.route("/rest/api/post",cors()).post((req,res)=>{
    console.log(req.body);
    data.push(req.body);
    console.log(data);
    fs.writeFileSync('demo.json',JSON.stringify(req.body))
    res.status(201).send(req.body)
});

exp.route("/rest/api/get/:name").post((req,res)=>{
    res.send("Hello World "+req.params['name']);
});


exp.use(cors()).listen(3000,()=>console.log("Running....."))



