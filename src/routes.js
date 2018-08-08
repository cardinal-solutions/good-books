import Home from './App';
import Book from './views/Book';

import NotFound from './views/System/NotFound';
import ServerError from './views/System/ServerError';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/book',
    component: Book,
  },
  {
    path: '/book/:bookid',
    component: Book,
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
