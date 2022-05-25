//Biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

//Definir endereço
const hostname = '127.0.0.1';
const port = 3000;

//implementando regra de negocio
const server = http.createServer((req, res) => {
  //pegar a pegunta URL
  const params = queryString.parse(url.parse(req.url, true).search);
//   console.log(params)
  //verificar a pergunta e escolher resposta
  let resposta;
  if (params.pergunta == 'melhor-filme') {
      resposta = 'Velozes e furiosos 1'
  } else if (params.pergunta == 'melhor-anime') {
      resposta = 'spy x family'
  } else {
      resposta = 'ainda não sabemos a resposta'
  }
  

  //retornar a resposta
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});


//execução do cod
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});