const routes = [
  {
    method: "GET",
    path: "/books",
    handler: (request, h) => {
      return "hello world";
    },
  },
];

module.exports = routes;
