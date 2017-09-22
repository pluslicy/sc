var express = require('express');
var studentsDB = require('../db/studentsDB');
var studentsRouter = express.Router();

studentsRouter.post('/login',function(req,resp){
  var body = req.body;
  resp.send(body);
})
studentsRouter.get('/findAll',function(req,resp){
  var body = req.body;
  studentsDB.findAll(function(results){
    resp.send(JSON.stringify(results));
  });
  
})

studentsRouter.post('/delete',function(req,resp){
  var ids = req.body;
  if(ids.length > 0){
    studentsDB.batchDelete(ids,function(result){
      resp.json(result);
    });
  }else {
    resp.json({'affectedRows':0});
  }
  
  
})

module.exports = studentsRouter;