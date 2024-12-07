import tabelacarros from './tabelacarros.js';
import express from 'express';

import {modeloCarro, modeloAtualizacaoCarro} from './validacao.js';
 
const app = express();
 
app.use(express.json());
 
app.get('/', (req, res) => {
    resposta.status(200).send(tabelacarros);
});

app.get('/:sigla', (req, res)  => {
    const siglaInformada = req.params.sigla.toUpperCase(); // Obtendo a Sigla
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
    // JoI
    const { error } = modeloCarro.validate(novoCarro);
    if (error) {
        // Se houver erro retorna erro 400 (Bad Request)
        res.status(400).send(error);
        return;
    }
    tabelacarros.push(novoCarro); //Adiciona o novo carro a lista de carros
    res.status(201).send(novoCarro); // Retorna o carro adicionado com status 200(ok)
});
    
app.put('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const carroSelecionado = tabelacarros.find(c => c.sigla === siglaInformada);
    if (!carroSelecionado) {
        res
        .status(404)
        .send( 
            'não existe um carro com a sigla informada!' //Mensagem de erro
                );
        return;
        };
        // JOI
        const {error} = modeloAtualizacaoCarro.validate(req.body);
        if (error) {
            //Se houver erro no modelo/validação retorna erro
            res.status(400).send(error);
            return;
            }
        const campos = Object.keys(req.body); // Obtem o corpo da requisição enviada
        for (let campo of campos) {
            carroSelecionado[campos] = req.body[campos]; //Atualiza o carro com a informação
        }
        res.status(200).send(carroSelecionado);
    });
    app.delete('/:sigla', (req, res) => {
        const siglaInformada = req.params.sigla.toUpperCase(); // Obtem a sigla
        const IndiceCarroSelecionado = tabelacarros.findIndex(
            (c) => c.sigla === siglaInformada // Busca o indice do carro na lista 
        );
        if (IndiceCarroSelecionado === -1) {
            //Se o carro não for encontrado/indice retorna -1
            res
            .status(404)
            .send(
                'Não existe um carro com a sigla informada!' // Mensagem de erro

            );
        return;
        };
        const carroRemovido = tabelacarros.splice(IndiceCarroSelecionado, 1); //Remove o carro 
        res.status(200).send(carroRemovido); //Retorna o carro removido com ok
    });

// Inicia o servidor na porta 3000:
    app.listen(3000,() => console.log("Servidor Rodando com Sucesso"));
 // node app.js
// localhost:3000/