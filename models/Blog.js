const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
  date: {
    type: String
  },
  technologies: 
    [{
      type: String
    }]
  ,
  accomplishments: 
    [{
      type: String
    }]
  ,
  challenges: 
    [{
      type: String
    }]
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
