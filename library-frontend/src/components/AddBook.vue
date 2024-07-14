<template>
    <div class="form-container">
      <h2>Add Book</h2>
      <form @submit.prevent="addBook" class="form">
        <input v-model="title" placeholder="Book Title" class="input" required />
        <select v-model="authorId" class="select" required>
          <option disabled value="">Select Author</option>
          <option v-for="author in authors" :key="author.id" :value="author.id">{{ author.name }}</option>
        </select>
        <button type="submit" class="btn">Add</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from '../axios';
  
  export default {
    data() {
      return {
        title: '',
        authorId: '',
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
      },
      addBook() {
        axios.post('/books', { title: this.title, author_id: this.authorId })
          .then(() => {
            alert('Book added successfully');
            this.title = '';
            this.authorId = '';
          })
          .catch(error => {
            console.error('There was an error adding the book:', error);
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
  
  .input, .select, .btn {
    height: 40px;
    margin: 4px 2px;
    width: auto;
  }
  
  .input, .select {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border-radius: 12px;
    border: 1px solid #ddd;
  }
  
  .select {
    appearance: none;
    background-color: white;
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
  