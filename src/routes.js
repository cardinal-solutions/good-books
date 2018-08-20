import Home from './App';
import Book from './views/book';
import Search from './views/search';
import NotFound from './views/system/NotFound';
import ServerError from './views/system/ServerError';
import Browse from './views/browse';
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
    path: '/book/:bookid',
    component: Book,
  },
  {
    path: '/book',
    component: Book,
    exact: true,
  },
  {
    path: '/browse/:list',
    exact: true,
    component: Browse,
  },
  {
    path: '/500',
    exact: true,
    component: ServerError,
  },
  {
    component: NotFound,
  },
];
