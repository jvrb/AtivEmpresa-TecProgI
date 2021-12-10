import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberTexto('Por favor, informe o Gênero (M / F): ')

        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let rgs: Array<RG> = []
        let rg = this.entrada.receberTexto('Por favor informe o RG: ')
        let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let partesDataRg = dataRg.split('/')
        let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
        let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
        let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
        let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
        let rgFormatado = new RG(rg, dataEmissaoRg)
        rgs.push(rgFormatado)

        let maisRg = this.entrada.receberNumero('Cadastrar mais algum RG? 1 - Sim / 2 - Não : ');
        if(maisRg == 1){
            let opcao = true
            while(opcao){
                let outroRg = this.entrada.receberTexto('Digite o RG');
                let dataEmissao = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
                let partesDataRg = dataEmissao.split('/')
                let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
                let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
                let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
                let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
                let rgFormatado = new RG(outroRg, dataEmissaoRg)
                rgs.push(rgFormatado)
                let maisRg = this.entrada.receberNumero('Cadastrar mais algum RG? 1 - Sim / 2 - Não: ');
                if(maisRg == 2){
                    opcao = false
                }
            }
        }

        let telefones: Array<Telefone> = []
        let telefoneddd = this.entrada.receberTexto('Digite o DDD: ')
        let telefoneNumero = this.entrada.receberTexto('Digite o numero: ')
        let telefoneFormatado = new Telefone(telefoneddd, telefoneNumero)
        telefones.push(telefoneFormatado)

        let maisTel = this.entrada.receberNumero('Cadastrar mais algum Telefone? 1 - SIM / 2 - NÃO: ');
        if(maisTel == 1) {
            let opcao = true
            while(opcao){
                let telefoneddd = this.entrada.receberTexto('Digite o DDD: ')
                let telefoneNumero = this.entrada.receberTexto('Digite o numero: ')
                let telefoneFormatado = new Telefone(telefoneddd, telefoneNumero)
                telefones.push(telefoneFormatado)
                let maisTel = this.entrada.receberNumero('Cadastrar mais algum Telefone? 1 - SIM / 2 - NÃO: ');
                if(maisTel == 2){
                    opcao = false
                }
            }
        }

        let cliente = new Cliente(nome, nomeSocial,genero, cpf, rgs, telefones);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}