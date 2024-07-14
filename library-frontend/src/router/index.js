import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthorsList from '../components/AuthorsList.vue';
import BooksList from '../components/BooksList.vue';
import AddAuthor from '../components/AddAuthor.vue';
import AddBook from '../components/AddBook.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/authors', component: AuthorsList },
  { path: '/books', component: BooksList },
  { path: '/add-author', component: AddAuthor },
  { path: '/add-book', component: AddBook }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
