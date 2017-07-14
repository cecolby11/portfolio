const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  technologies: 
    [{
      type: String
    }]
  ,
  githubUrl: {
    type: String
  },
  projectUrl: {
    type: String
  },
  team: {
    type: String
  },
  imgUrl: {
    type: String
  },
  description: {
    type: String
  },
  role: {
    type: String
  }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
