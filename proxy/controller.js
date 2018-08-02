const axios = require('axios');

module.exports = {
  getProductDescription: (req, res) => {
    axios.get('http://localhost:3001/bundle.js', {responseType: 'text'})
    .then((result) => res.status(200).send(result.data))
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('A---', error.response.data);
        console.log('B---', error.response.status);
        console.log('C---', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('D---', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log('E---', error.config);
    });
  },

  getRelatedProducts: (req, res) => {
    axios.get('http://localhost:1337/client/bundle.js', {responseType: 'text'})
    .then(result => res.status(200).send(result.data))
    .catch(function (error) {
      if (error.response) {
        console.log('A---', error.response.data);
        console.log('B---', error.response.status);
        console.log('C---', error.response.headers);
      } else if (error.request) {
        console.log('D---', error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log('E---', error.config);
    });

  },

  getQandA: (req, res) => {
    axios.get('http://localhost:3004/bundle.js', {responseType: 'text'})
      .then(result => res.status(200).send(result.data))
      .catch(function (error) {
        if (error.response) {
          console.log('A---', error.response.data);
          console.log('B---', error.response.status);
          console.log('C---', error.response.headers);
        } else if (error.request) {
          console.log('D---', error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log('E---', error.config);
      });
  },

  getRPdata: (req, res) => {
    axios.get('http://localhost:1337/api/related')
      .then(result => res.status(200).send(result.data))
      .catch(function (error) {
        if (error.response) {
          console.log('A---', error.response.data);
          console.log('B---', error.response.status);
          console.log('C---', error.response.headers);
        } else if (error.request) {
          console.log('D---', error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log('E---', error.config);
      });
  },

  getPDdata: (req, res) => {
    axios.get('http://localhost:3001/api/product')
      .then(result => res.status(200).send(result.data))
      .catch(function (error) {
        if (error.response) {
          console.log('A---', error.response.data);
          console.log('B---', error.response.status);
          console.log('C---', error.response.headers);
        } else if (error.request) {
          console.log('D---', error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log('E---', error.config);
      });
  },

  getQuestions: (req, res) => {
    axios.get('http://localhost:3004/api/question', { params: req.query })
      .then(result => res.status(200).send(result.data))
      .catch(function (error) {
        if (error.response) {
          console.log('A---', error.response.data);
          console.log('B---', error.response.status);
          console.log('C---', error.response.headers);
        } else if (error.request) {
          console.log('D---', error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log('E---', error.config);
      });
  },

  getAnswers: (req, res) => {
    axios.get('http://localhost:3004/api/answer', { params: req.query })
      .then(result => res.status(200).send(result.data))
      .catch(function (error) {
        if (error.response) {
          console.log('A---', error.response.data);
          console.log('B---', error.response.status);
          console.log('C---', error.response.headers);
        } else if (error.request) {
          console.log('D---', error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log('E---', error.config);
      });
  }
}