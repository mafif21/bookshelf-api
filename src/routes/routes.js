const {
  addBookHandler,
  getAllBooksHandler,
  getDetailBook,
  deleteBookHandler,
} = require("../controller/handler");

const routes = [
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getDetailBook,
  },
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookHandler,
  },
];

module.exports = routes;
