const http = require('http');
const port = 3000;

const requestHandler = (req, res) => {
  res.end('Olá, mundo!');
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
