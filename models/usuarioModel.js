//Importando o módulo brcypt para criptografar senhas 
import brcypt from 'brcypt';

// Inicializando uma lista de usuários (Em um cenário real, 
// Isso viria de um BD)
let usuarios = [
    // Exemplo de um usuário com senha criptografada
    {
        id: 1, // ID do usuario
        nome: 'Simone Batista',
        email: 'sqb1410@gmail.com',
        senha: brcypt.hashSync('Senha1234', 10)
    // Senha gerada com brcypt ( o segundo parametro é o número de saltos para gerar o Hash)
    },
];

// Função para obter todos os usuários
export const getAllUsuarios = () => usuarios;

// Função para encontrar um usuário pelo e-mail
export const getUsuarioByEmail = (email) => {
    // Retorna o usuario
    return usuarios.find((usuario) => usuarios.email === email);
    };

    // Função para criar um novo usuário
    export const createUsuarios = (novoUsuario) => {
        // Gera um novo ID para o usuário (Simulando um banco de dados com incremento)
        const novoId = usuarios.length + 1;

        // Cria o novo usuário com dados fornecidos e senha criptografada
        const usuario = {
            ...novoUsuario, // Copia os dados do novo usuário
            id: novoId, // Adiciona o ID gerado
            senha: brcypt.hashSync(novoUsuario.senha, 10), // Criptografia a senha antes de armazenar
        };

        // Adiciona o novo usuário a lista de usuários
        usuarios.push(usuario);

        //Retorna o novo usuário criado
        return usuario; 
    };

    // Função para atualizar os dados de um usuario existente 
    export const updateUsuario = (id, dadosAtualizados) => {
        // Procura o índice  do usuario com ID fornecido
        const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

        // Se o usuario não for encontrado retorna Null
        if (usuarioIndex == -1) return null;
    
    //Atualiza os dados do usuario no indice encontrado (Combinando Dados antigos com os novos)
    usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...dadosAtualizados };

    // Retorna o usuario atualizado
    return usuarios[usuarioIndex];
    };

    // Função para excluir um usuario pelo ID
    export const deleteUsuario = (id) => {
        // Procura o indice do usuario a ser removido
        const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

    // Se o usuario nao for encontrado, retorna Null
    if (usuarioIndex === -1) return null;

    //Remove o usuario da lista (usando o método splice) e retorna o usuario removido
    const [usuarioRemovido] = usuarios.splice(usuarioIndex, 1);

    // Retorna o usuario que foi removido
    return usuarioRemovido;
    };
