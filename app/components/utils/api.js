import axios from 'axios';

const apiCaller = {
  getAllProjects() {
    return axios.get('/api/projects').then(function(response) {
      return response.data;
    });
  },

  getProject(id) {
    return axios.get('/api/projects/:id').then(
      function(response) {
        console.log(response.data);
        return response.data;
      });
  }
}

export default apiCaller;