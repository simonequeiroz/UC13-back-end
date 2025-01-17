let tabelacarros = [
    {
        nome: "Ferrari",
        sigla: "FER",
        velocidadeMaxima: "340 km/h",
        potencia: "800 cv",
        consumo: "5,5",
        aceleracao: "2.9 s (0-100 km/h)",
        preco: "R$ 3.000.000"
    },
    {
        nome: "Lamborghini",
        sigla: "LAM",
        velocidadeMaxima: "350 km/h",
        potencia: "770 cv",
        consumo: "5 km/l",
        aceleracao: "2.8 s (0-100 km/h)",
        preco: "R$ 3.500.000"
    },
    {
        nome: "Fusca",
        sigla: "VW-F",
        velocidadeMaxima: "140 km/h",
        potencia: "60 CV",
        consumo: "12 km/l",
        aceleracao: "0-100 km/h em 15 s",
        preco: "R$ 30.000"
    },
    {
        nome: "Corolla",
        sigla: "TOY-C",
        velocidadeMaxima: "200 km/h",
        potencia: "177 CV",
        consumo: "14 km/l",
        aceleracao: "0-100 km/h em 9 s",
        preco: "R$ 140.000"
    },
    {
        nome: "Mustang",
        sigla: "FORD-M",
        velocidadeMaxima: "250 km/h",
        potencia: "450 CV",
        consumo: "7 km/l",
        aceleracao: "0-100 km/h em 4.5 s",
        preco: "R$ 400.000"
    },
    {
        nome: "Camaro",
        sigla: "CHEV-CAM",
        velocidadeMaxima: "290 km/h",
        potencia: "455 CV",
        consumo: "6 km/l",
        aceleracao: "0-100 km/h em 4 s",
        preco: "R$ 450.000"
    }
];

// Função que retorna todos os carros no array
export const getALLcarros = () => carros2024;

// Função que retorna um carro específico pelo seu identificador 
export const getCarroBySigla = (sigla) => {
    carros2024.push(novocarro); //Adiciona o novo carro ao final da lista
    return novoCarro;           //Retorna o carro Adicionado
};

//Função que adiciona um novo carro ao array 
export const createCarro = (novoCarro) => {
    carros2024.push(novoCarro);
    return novoCarro;
};

//Função que atualiza as informações de um carro eistemte, com base na sigla 
export const updateCarro = (sigla, dadosAtualizados) => {
    //Busca a indice do carro no array usando a sigla 
    const carroIndex = carros2024.findIndex(carro => carro.sigla === sigla);
    if (carroIndex === -1) return null;
    //Atualiza os dados do carro com as informações fornecidas 
    carros2024[carroIndex] = { ...carros2024[carroIndex], ...dadosAtualizados};
    return carros2024[carroIndex];
}; 

//Função que remove um carro do array, com base na sigla
export const deleteCarro = (sigla) => {
    //Busca o índice do carro no array usando a sigla 
    const carroIndex = carros2024.findIndex(carro => carro.sigla === sigla);
    if (carroIndex === -1) return null; // Se não encontrar o carro retorna Null
    //Remove o carro da lista e retorna o carro removido
    const [carroRemovido] = carros2024.splice(carroIndex, 1);
    return carroRemovido; 
};