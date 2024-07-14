<template>
    <div class="form-container">
      <h2>Add Author</h2>
      <form @submit.prevent="addAuthor" class="form">
        <input v-model="name" placeholder="Author Name" class="input" required />
        <button type="submit" class="btn">Add</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from '../axios';
  
  export default {
    data() {
      return {
        name: ''
      };
    },
    methods: {
      addAuthor() {
        axios.post('/authors', { name: this.name })
          .then(() => {
            alert('Author added successfully');
            this.name = '';
          })
          .catch(error => {
            console.error('There was an error adding the author:', error);
          });
      }
    }
  };
  </script>
  
  <style>
  .form-container {
    width: 100%;
  }
  
  .form {
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 400px;
  }
  
  .input, .btn {
    height: 40px;
    margin: 4px 2px;
    width: auto;
  }
  
  .input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border-radius: 12px;
    border: 1px solid #ddd;
  }
  
  .btn {
    background-color: #d2b48c;
    border: none;
    color: white;
    padding: 0 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 12px;
    transition-duration: 0.4s;
  }
  
  .btn:hover {
    background-color: white;
    color: black;
    border: 2px solid #d2b48c;
  }
  </style>
  