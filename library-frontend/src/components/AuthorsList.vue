<template>
    <div class="table-container">
      <h2>Authors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="author in authors" :key="author.id">
            <td>{{ author.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from '../axios';
  
  export default {
    data() {
      return {
        authors: []
      };
    },
    created() {
      this.fetchAuthors();
    },
    methods: {
      fetchAuthors() {
        axios.get('/authors')
          .then(response => {
            this.authors = response.data;
          })
          .catch(error => {
            console.error('There was an error fetching the authors:', error);
          });
      }
    }
  };
  </script>
  
  <style>
  .table-container {
    width: 25%;
    padding: 20px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #d2b48c;
  }
  </style>
  