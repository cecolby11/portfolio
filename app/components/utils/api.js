import axios from 'axios';

const apiCaller = {
  getAllProjects() {
    return axios.get('/api/projects').then(function(response) {
      return response.data;
    });
  }
}

export default apiCaller;