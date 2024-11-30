import tabelacarros from './tabelacarros.js';
import express from 'express';
 
const app = express();
 
app.use(express.json());
 
app.get( '/', (requisicao, resposta) => {
    resposta.status(200).send(tabelacarros);
});

app.get('/:sigla', (requisiçao, resposta)  => {
    const siglaInformada = requisicao.params.sigla.toUpperCase(); // Obtendo a Sigla
    const carro = tabelacarros.find((infoCarro) => infoCarro.sigla === siglaInformada); // Buscando o carro pela sigla
    if (!carro) {
        // ! Vazio Not
        // Se o carro não for encontrado, retorna erro 404
        resposta
        .status(404)
        .send(
            'não existe um carro com a sigla informada!'  // Mensagem de erro
        );
        return;
    }
    resposta.status(200).send(carro); // Se encontrado a sigla retorna a resposta correta 

});
app.post('/', (req, res) => {
    const novoCarro = req.body; // Obtem o corpo enviado para incluir um carro
    tabelacarros.push(novoCarro); //Adiciona o novo carro a lista de carros
    res.status(200).send(novoCarro); // Retorna o carro adicionado com status 200(ok)
});

    
    // Inicia o servidor na porta 3000:
app.listen(3000,() => console.log("Servidor Rodando com Sucesso"));
 
// node app.js
// localhost:3000/