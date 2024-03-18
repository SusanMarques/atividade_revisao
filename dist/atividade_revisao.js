"use strict";
/* O sistema deve permitir o cadastro de vários projetos, cada
um contendo informações como nome do projeto, descrição, tecnologias utilizadas, data de
início, data de término prevista e status (em andamento, concluído, etc.).

Cada projeto deve
ser composto por diversas tarefas, que devem incluir detalhes como nome da tarefa,
descrição, desenvolvedor responsável, prazo e status (pendente, em execução, concluída).

Para melhor organização, o sistema deve permitir a formação de equipes de
desenvolvimento, onde cada equipe pode ser responsável por um ou mais projetos. Cada
equipe deve ter um líder e uma lista de membros, e cada membro pode estar envolvido em
várias tarefas em diferentes projetos. */
/* Orientações para a Implementação: Você deve abstrair as entidades do sistema,
como projetos, tarefas e equipes, em classes, definindo atributos e métodos apropriados
para cada uma. Devem ser aplicados conceitos de orientação a objetos como
encapsulamento, para proteger os dados e garantir o uso adequado das funcionalidades, e
herança, caso existam categorias específicas de tarefas ou projetos. O polimorfismo pode
ser utilizado para tratar de maneira flexível as diferentes ações que podem ser realizadas
sobre projetos e tarefas. */
// Definição da classe projeto 
class Projeto {
    nome;
    descricao;
    tecnologias_utilizadas;
    data_de_inicio;
    data_de_termino;
    status;
    constructor(nome, descricao, tecnologias_utilizadas, data_de_inicio, data_de_termino, status) {
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
const projeto1 = new Projeto('Projeto teste', 'Esse é o projeto teste', ['SCRUM', 'KANBAM'], new Date('2024-03-10'), new Date('2024-03-20'), 'Concluído');
const tarefa1 = new Tarefa('Tarefa teste', 'Essa é a tarefa teste', 'Susan', new Date('2024-03-18'), 'Pendente');
const equipe1 = new Equipes('João', ['joana', 'maria', 'debora'], projeto1);
projeto1.mostrarDados();
tarefa1.mostrarDados();
equipe1.mostrarDados();
