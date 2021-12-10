"use strict";
exports.__esModule = true;
var entrada_1 = require("../io/entrada");
var empresa_1 = require("../modelo/empresa");
var cadastroCliente_1 = require("../negocio/cadastroCliente");
var cadastroServico_1 = require("../negocio/cadastroServico");
var listagemClientes_1 = require("../negocio/listagemClientes");
var listagemServicos_1 = require("../negocio/listagemServicos");
console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty");
var empresa = new empresa_1["default"]();
var execucao = true;
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Cadastrar servi\u00E7os");
    console.log("4 - Listar todos os servi\u00E7os");
    console.log("0 - Sair");
    var entrada = new entrada_1["default"]();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1["default"](empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1["default"](empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            var cadastroServico = new cadastroServico_1["default"](empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 4:
            var listagemServico = new listagemServicos_1["default"](empresa.getServicos);
            listagemServico.listar();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
