const {
  addBooksHandler,
  showAllBooksHandler,
  showBooksByIdHandler,
  updateBooksHandler,
  deleteBooksHandler,
} = require('./handler');

const BooksRoutes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: showAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: showBooksByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBooksHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBooksHandler,
  },
];

module.exports = BooksRoutes;
