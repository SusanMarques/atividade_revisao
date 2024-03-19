"use strict";
// Definição da classe projeto 
class Projeto {
    nome;
    descricao;
    tecnologias_utilizadas;
    data_de_inicio;
    data_de_termino;
    status;
    constructor(// construtor da classe projeto
    nome, // modificador public, no encapsulamento: Pode ser acessado tanto pela mesma classe, classes filhas e outras classes.
    descricao, tecnologias_utilizadas, data_de_inicio, data_de_termino, status) {
        this.nome = nome;
        this.descricao = descricao;
        this.tecnologias_utilizadas = tecnologias_utilizadas;
        this.data_de_inicio = data_de_inicio;
        this.data_de_termino = data_de_termino;
        this.status = status;
        this.nome = nome;
        this.descricao = descricao;
        this.tecnologias_utilizadas = tecnologias_utilizadas;
        this.data_de_inicio = data_de_inicio;
        this.data_de_termino = data_de_termino;
        this.status = status;
    }
    mostrarDados() {
        console.log('--------------Dados do Projeto-------------');
        console.log(`Nome: ${this.nome}`);
        console.log(`descricão: ${this.descricao}`);
        console.log(`tecnologias utilizadas: ${this.tecnologias_utilizadas}`);
        console.log(`data de inicio: ${this.data_de_inicio}`);
        console.log(`data de término: ${this.data_de_termino}`);
        console.log(`status: ${this.status}`);
        console.log('----------------------------------------------');
    }
}
// Definição da classe tarefa
class Tarefa {
    nome_da_tarefa;
    descricao;
    desenvolvedor;
    prazo;
    status;
    constructor(nome_da_tarefa, descricao, desenvolvedor, prazo, status) {
        this.nome_da_tarefa = nome_da_tarefa;
        this.descricao = descricao;
        this.desenvolvedor = desenvolvedor;
        this.prazo = prazo;
        this.status = status;
        this.nome_da_tarefa = nome_da_tarefa;
        this.descricao = descricao;
        this.desenvolvedor = desenvolvedor;
        this.prazo = prazo;
        this.status = status;
    }
    mostrarDados() {
        console.log('--------------Dados da tarefa-------------');
        console.log(`nome da tarefa: ${this.nome_da_tarefa}`);
        console.log(`descricão: ${this.descricao}`);
        console.log(`desenvolvedor: ${this.desenvolvedor}`);
        console.log(`prazo: ${this.prazo}`);
        console.log(`status: ${this.status}`);
        console.log('----------------------------------------------');
    }
}
// Definição da classe equipe
class Equipes {
    lider;
    lista_de_membros;
    projeto;
    constructor(lider, lista_de_membros, projeto) {
        this.lider = lider;
        this.lista_de_membros = lista_de_membros;
        this.projeto = projeto;
        this.lider = lider;
        this.lista_de_membros = lista_de_membros;
        this.projeto = projeto;
    }
    mostrarDados() {
        console.log('--------------Dados da Equipe-------------');
        console.log(`lider: ${this.lider}`);
        console.log(`lista de membros: ${this.lista_de_membros}`);
        console.log(`projeto: ${this.projeto}`);
        console.log('----------------------------------------------');
    }
}
// Definição da classe funcionario
class funcionario {
    nome;
    email;
    telefone;
    data_nascimento;
    endereco;
    cpf;
    cargo;
    genero;
    constructor(nome, email, //modificador protected, no encapsulamento: Pode ser acessado pela mesma classe e classes filhas, não pode ser acessado por outras classes.
    telefone, data_nascimento, endereco, cpf, cargo, genero) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.data_nascimento = data_nascimento;
        this.endereco = endereco;
        this.cpf = cpf;
        this.cargo = cargo;
        this.genero = genero;
    }
    mostrarDados() {
        console.log('--------------Dados do funcionário-------------');
        console.log(`nome: ${this.nome}`);
        console.log(`email: ${this.email}`);
        console.log(`telefone: ${this.telefone}`);
        console.log(`telefone: ${this.data_nascimento}`);
        console.log(`telefone: ${this.endereco}`);
        console.log(`telefone: ${this.cpf}`);
        console.log(`telefone: ${this.cargo}`);
        console.log(`telefone: ${this.genero}`);
        console.log('----------------------------------------------');
    }
}
// Herança - classe desenvolvedor herda de funcionario
class desenvolvedor extends funcionario {
    habilidades;
    area_de_programacao;
    constructor(nome, email, telefone, data_nascimento, endereco, cpf, cargo, habilidades, area_de_programacao, genero) {
        super(nome, email, telefone, data_nascimento, endereco, cpf, cargo, genero);
        this.habilidades = habilidades;
        this.area_de_programacao = area_de_programacao;
    }
    mostrarDados() {
        console.log('--------------Dados do desenvolvedor-------------');
        console.log(`nome: ${this.nome}`);
        console.log(`email: ${this.email}`);
        console.log(`telefone: ${this.telefone}`);
        console.log(`telefone: ${this.data_nascimento}`);
        console.log(`telefone: ${this.endereco}`);
        console.log(`telefone: ${this.cpf}`);
        console.log(`telefone: ${this.cargo}`);
        console.log(`telefone: ${this.genero}`);
        console.log(`telefone: ${this.habilidades}`);
        console.log(`telefone: ${this.area_de_programacao}`);
        console.log('----------------------------------------------');
    }
}
// criando instancias das classes
const projeto1 = new Projeto('Projeto teste', 'Esse é o projeto teste', ['SCRUM', 'KANBAM'], new Date('2024-03-10'), new Date('2024-03-20'), 'Concluído');
const tarefa1 = new Tarefa('Tarefa teste', 'Essa é a tarefa teste', 'Susan', new Date('2024-03-18'), 'Pendente');
const equipe1 = new Equipes('João', ['joana', 'maria', 'debora'], projeto1);
const funcionario1 = new funcionario('Luan Murilo Breno da Costa', 'luan_dacosta@slb.com', '844442536', new Date('03-03-1983'), ['Passagem Belém', 'São João do Outeiro (Outeiro)'], '445.927.466-35', 'Analista de sistemas', 'Masculino');
const desenvolvedor1 = new desenvolvedor('José Enrico Paulo Silveira', 'jose_enrico_silveira@hydropowermc.com.br', '5489663621', new Date('26-02-1960'), ['Rua dos Acaris', 'Jardins Munique'], '854.633.431-52', 'desenvolvedor', ['SQL', 'PHP', 'typescript'], 'fulstack', 'masculino');
//mostrando os dados através da chamada dos métodos
projeto1.mostrarDados();
tarefa1.mostrarDados();
equipe1.mostrarDados();
funcionario1.mostrarDados();
desenvolvedor1.mostrarDados();
