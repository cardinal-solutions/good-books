import Home from './views/home';
import Book from './views/book';
import BookList from './views/book/List';
import Search from './views/search';
import Browse from './views/browse';
import NotFound from './views/system/NotFound';
export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/search',
    exact: true,
    component: Search,
  },
  {
    path: '/search/:searchquery',
    component: BookList,
  },
  {
    path: '/book/:bookid',
    component: Book,
  },
  {
    path: '/browse/:list',
    exact: true,
    component: Browse,
  },
  {
    component: NotFound,
  },
];
