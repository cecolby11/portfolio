import axios from 'axios';

const apiCaller = {
  getAllProjects() {
    return axios.get('/api/projects').then(function(response) {
      return response.data;
    });
  },

  getProject(id) {
    return axios.get(`/api/projects/${id}`).then(
      function(response) {
        return response.data;
      });
  },

  getAllBlogs() {
    return axios.get('/api/blogs').then(function(response) {
      return response.data;
    });
  }
}

export default apiCaller;