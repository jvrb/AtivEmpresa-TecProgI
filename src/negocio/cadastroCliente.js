"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var entrada_1 = require("../io/entrada");
var cliente_1 = require("../modelo/cliente");
var cpf_1 = require("../modelo/cpf");
var rg_1 = require("../modelo/rg");
var telefone_1 = require("../modelo/telefone");
var cadastro_1 = require("./cadastro");
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1["default"]();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do cliente");
        var nome = this.entrada.receberTexto("Por favor informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Por favor informe o nome social do cliente: ");
        var valor = this.entrada.receberTexto("Por favor informe o n\u00FAmero do cpf: ");
        var data = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/yyyy: ");
        var partesData = data.split('/');
        var ano = new Number(partesData[2].valueOf()).valueOf();
        var mes = new Number(partesData[1].valueOf()).valueOf();
        var dia = new Number(partesData[0].valueOf()).valueOf();
        var dataEmissao = new Date(ano, mes, dia);
        var cpf = new cpf_1["default"](valor, dataEmissao);
        var rgs;
        var rg = this.entrada.receberTexto('Por favor informe o RG');
        var dataRg = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do RG, no padr\u00E3o dd/mm/yyyy: ");
        var partesDataRg = dataRg.split('/');
        var anoRg = new Number(partesDataRg[2].valueOf()).valueOf();
        var mesRg = new Number(partesDataRg[1].valueOf()).valueOf();
        var diaRg = new Number(partesDataRg[0].valueOf()).valueOf();
        var dataEmissaoRg = new Date(anoRg, mesRg, diaRg);
        var rgFormatado = new rg_1["default"](rg, dataEmissaoRg);
        rgs.push(rgFormatado);
        var maisRg = this.entrada.receberNumero('Cadastrar mais algum RG? 1 - Sim / 2 - Não');
        if (maisRg == 1) {
            var opcao = true;
            while (opcao) {
                var outroRg = this.entrada.receberTexto('Digite o RG');
                var dataEmissao_1 = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do RG, no padr\u00E3o dd/mm/yyyy: ");
                var partesDataRg_1 = dataEmissao_1.split('/');
                var anoRg_1 = new Number(partesDataRg_1[2].valueOf()).valueOf();
                var mesRg_1 = new Number(partesDataRg_1[1].valueOf()).valueOf();
                var diaRg_1 = new Number(partesDataRg_1[0].valueOf()).valueOf();
                var dataEmissaoRg_1 = new Date(anoRg_1, mesRg_1, diaRg_1);
                var rgFormatado_1 = new rg_1["default"](outroRg, dataEmissaoRg_1);
                rgs.push(rgFormatado_1);
                var maisRg_1 = this.entrada.receberNumero('Cadastrar mais algum RG? 1 - Sim / 2 - Não');
                if (maisRg_1 == 2) {
                    opcao = false;
                }
            }
        }
        var telefones;
        var telefoneddd = this.entrada.receberTexto('Digite o DDD');
        var telefoneNumero = this.entrada.receberTexto('Digite o numero');
        var telefoneFormatado = new telefone_1["default"](telefoneddd, telefoneNumero);
        telefones.push(telefoneFormatado);
        var maisTel = this.entrada.receberNumero('Cadastrar mais algum Telefone? 1 - SIM / 2 - NÃO');
        if (maisTel == 1) {
            var opcao = true;
            while (opcao) {
                var telefoneddd_1 = this.entrada.receberTexto('Digite o DDD');
                var telefoneNumero_1 = this.entrada.receberTexto('Digite o numero');
                var telefoneFormatado_1 = new telefone_1["default"](telefoneddd_1, telefoneNumero_1);
                telefones.push(telefoneFormatado_1);
                var maisTel_1 = this.entrada.receberNumero('Cadastrar mais algum Telefone? 1 - SIM / 2 - NÃO');
                if (maisTel_1 == 2) {
                    opcao = false;
                }
            }
        }
        var cliente = new cliente_1["default"](nome, nomeSocial, cpf, rgs, telefones);
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastroCliente;
}(cadastro_1["default"]));
exports["default"] = CadastroCliente;
