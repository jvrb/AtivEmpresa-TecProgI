import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemServicos from "../negocio/listagemServicos";
import AlterarCliente from "../negocio/alterarCliente";
import CadastrarConsumo from "../negocio/cadastrarConsumo";
import ListagemConsumo from "../negocio/listagemConsumo";
import ListagemClientesGenero from "../negocio/listagemClientesGenero";
import ListagemClienteMaisConsumo from "../negocio/listagemClientesMaisConsumo";
import ListagemClienteMenosConsumo from "../negocio/listagemClientesMenosConsumo";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Alterar cliente`);
    console.log(`4 - Cadastrar serviços`);
    console.log(`5 - Listar todos os serviços`);
    console.log(`6 - Cadastrar Consumo`);
    console.log(`7 - Listar todos os consumos`);
    console.log(`8 - Listar todos os consumos por Gênero`);
    console.log(`9 - Listar por Maior consumo`);
    console.log(`10 - Listar por Menor consumo`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let alterarCliente = new AlterarCliente(empresa.getClientes)
            alterarCliente.alterar()
            break;
        case 4:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 5:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 6:
            let cadastrarConsumo = new CadastrarConsumo(empresa.getClientes, empresa.getServicos, empresa.getConsumos)
            cadastrarConsumo.cadastrar()
            break;
        case 7:
            let listarConsumo = new ListagemConsumo(empresa.getConsumos)
            listarConsumo.listar()
            break;
        case 8:
            let listarConsumoGenero = new ListagemClientesGenero(empresa.getConsumos)
            listarConsumoGenero.listar()
            break;
        case 9:
            let listarClientesMaisConsumo = new ListagemClienteMaisConsumo(empresa.getClientes)
            listarClientesMaisConsumo.listar()
            break;
        case 10:
            let listarClientesMenosConsumo = new ListagemClienteMenosConsumo(empresa.getClientes)
            listarClientesMenosConsumo.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}