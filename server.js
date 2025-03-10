const jsonServer = require("json-server");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router("db.json");

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("/api", router);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Mock server is running at http://localhost:${PORT}/api`);
});
