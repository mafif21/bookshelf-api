const {
  addBookHandler,
  getAllBooksHandler,
  getDetailBook,
} = require("../controller/handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
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
];

module.exports = routes;
