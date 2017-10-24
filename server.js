// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const Project = require('./models/Project.js');
const Blog = require('./models/Blog.js');

const app = express();
const PORT = process.env.PORT || 5000;

// serve static files from public directory
app.use(express.static('./public'));

// mongoose setup
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MONGODB_URL_PROD);
} else if (process.env.NODE_ENV === 'development') {
  mongoose.connect(process.env.MONGODB_URL_DEV); 
}

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

// GET: mongodb query - all blogs
app.get('/api/blogs', function(req, res) {
  Blog.find({}, function(error, doc) {
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
app.get('/api/createSeeds', function(req, res) {
  // read in project data
  fs.readFile('projects.js', 'utf8', function(error, data) {
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
      // read in blog data
      fs.readFile('blog.js', 'utf8', function(error, data) {
        if(error) {
          console.log(error);
        } else {
          console.log('HERE');
          // clear out database 
          Blog.collection.drop();
          // re-seed with blog data
          const blogs = JSON.parse(data);
          for (let i = 0; i < blogs.length; i++) {
            let newBlog = new Blog(blogs[i]);
            newBlog.save(function(err) {
              if(err) {
                res.send(err);          }
            });
          }
          res.redirect('/api/blogs');
        }
      });
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