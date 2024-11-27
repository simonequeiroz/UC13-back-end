import tabelacarro from './tabelacarros.js';
import express from 'express';
 
const app = express();
 
app.use(express.json());
 
app.get( '/', (requisicao, resposta) => {
    resposta.status(200).send(tabelacarro);
});

// Inicia o servidor na porta 3000:
app.listen(3000,() => console.log("Servidor Rodando com Sucesso"));
 
// node app.js
// localhost:3000/