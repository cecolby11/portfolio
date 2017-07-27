// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const Project = require('./models/Project.js');

const app = express();
const PORT = process.env.PORT || 5000;

// serve static files from public directory
app.use(express.static('./public'));

// mongoose setup
mongoose.connect('mongodb://localhost/projects'); 
// mongoose.connect('mongodb://heroku_g63k1p0l:qkv6liv1cb5an1o3ufrcnjep1n@ds159662.mlab.com:59662/heroku_g63k1p0l');

var db = mongoose.connection;
db.on('error', function(err) {
  console.log('mongoose error: ', err);
});
db.once('open', function() {
  console.log('mongoose connection successful');
});

// Routes 

// GET: mongodb query - all projects
app.get('/api/projects', function(req, res) {
  Project.find({}, function(error, doc) {
    if(error) {
      res.send(error);
    } else {
      res.json(doc);
    }
  });
}); 

// GET: mongodb query - project by id
app.get(`/api/projects/:id`, function(req, res) {
  Project.findById(req.params.id, function(error, doc) {
    if(error) {
      res.send(error);
    } else {
      res.json(doc);
    }
  });
});

// GET: seeds route for database 
app.get('/createProjects', function(req, res) {
  // read in data
  fs.readFile('data.js', 'utf8', function(error, data) {
    if(error) {
      console.log(error);
    } else {
      // clear out database 
      Project.collection.drop();
      // re-seed with project data
      const projects = JSON.parse(data);
      for (let i = 0; i < projects.length; i++) {
        let newProject = new Project(projects[i]);
        newProject.save(function(err) {
          if(err) {
            res.send(err);          }
        });
      }
      res.redirect('/api/projects');
    }
  });
});

// GET: main route, redirects to rendered react application
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, function() {
  console.log('App listening');
});