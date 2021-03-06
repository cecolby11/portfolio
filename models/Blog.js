const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
  date: {
    type: Date
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
  icon: {
    type: String
  }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
