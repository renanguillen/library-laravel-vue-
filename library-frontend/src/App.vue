<template>
    <div id="app">
      <nav class="sidebar">
        <router-link to="/authors">Authors</router-link>
        <router-link to="/books">Books</router-link>
        <router-link to="/add-author">Add Author</router-link>
        <router-link to="/add-book">Add Book</router-link>
      </nav>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  };
  </script>
  
  <style>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f5f5dc;
  }
  
  #app {
    display: flex;
    height: 100vh;
  }
  
  .sidebar {
    width: 200px;
    background-color: #333;
    color: white;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  }
  
  .sidebar a {
    color: white;
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
  }
  
  .sidebar a:hover {
    background-color: #575757;
  }
  
  .content {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  </style>
  