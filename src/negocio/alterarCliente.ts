import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Alterar from "./alterar";


export default class AlterarCliente extends Alterar{

        public clientePosicao: number;
        private clientes: Array<Cliente>
        private entrada: Entrada;

        constructor(clientes: Array<Cliente>){
                super()
                this.clientes = clientes
                this.entrada = new Entrada()
                this.clientePosicao = 0
        }
        

        public alterar():void{
                let posicao = this.entrada.receberTexto('Digite o CPF do Cliente: ')

                for(var i=0; i< this.clientes.length; i++){
                        if(this.clientes[i].getCpf.getValor == posicao){
                                this.clientePosicao = i;
                        }
                }

                console.log('Opções')
                console.log('1 - Nome')
                console.log('2 - Nome Social')
                console.log('3 - CPF')
                console.log('4 - RG')
                console.log('5 - Telefones')
        
                let opcao = this.entrada.receberNumero('Por favor, escolha uma opção: ')

                
        
                 switch(opcao){
                        case 1:     
                                let nome = this.entrada.receberTexto('Por favor, digite o nome: ')
                                this.clientes[this.clientePosicao].nome = nome;
                                break
                        case 2:
                                let nomeSocial = this.entrada.receberTexto('Por favor, digite o nome Social: ')
                                this.clientes[this.clientePosicao].nomeSocial = nomeSocial
                                break
                        case 3: 
                                let cpf = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
                                let dataCpf = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
                                let partesData = dataCpf.split('/')
                                let ano = new Number(partesData[2].valueOf()).valueOf()
                                let mes = new Number(partesData[1].valueOf()).valueOf()
                                let dia = new Number(partesData[0].valueOf()).valueOf()
                                let cpfEmissao = new Date(ano, mes, dia)
                                let cpfFormatado = new CPF(cpf, cpfEmissao);
                                this.clientes[this.clientePosicao].setCpf = cpfFormatado
                                break
                        case 4:
                                let rgsTam = this.clientes[this.clientePosicao].getRgs.length
                                console.log('RGS Cadastrados')
                                for(var i = 0; i < rgsTam; i++){
                                        console.log(`${i} - ` + this.clientes[this.clientePosicao].getRgs[i].getValor)
                                }
                                let rgAlterar = this.entrada.receberNumero('Por favor informe o Número que deseja alterar: ')

                                let rg = this.entrada.receberTexto('Informe o NOVO RG: ')
                                let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
                                let partesDataRg = dataRg.split('/')
                                let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
                                let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
                                let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
                                let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
                                let rgFormatado = new RG(rg, dataEmissaoRg)

                                for(var i = 0; i < rgsTam; i++){
                                        if(i == rgAlterar){
                                                this.clientes[this.clientePosicao].getRgs[i] = rgFormatado
                                        }
                                }

                                break
                        case 5:
                                let telTam = this.clientes[this.clientePosicao].getTel.length
                                console.log('Telefones Cadastrados')
                                for(var i = 0; i < telTam; i++){
                                        console.log(`${i} - (${this.clientes[this.clientePosicao].getTel[i].getDdd}) ${this.clientes[this.clientePosicao].getTel[i].getNumero}` )
                                }
                                let telAlterar = this.entrada.receberNumero('Por favor informe o Número que deseja alterar: ')

                                let telefoneddd = this.entrada.receberTexto('Digite o DDD: ')
                                 let telefoneNumero = this.entrada.receberTexto('Digite o numero: ')
                                 let telefoneFormatado = new Telefone(telefoneddd, telefoneNumero)

                                 for(var i = 0; i < telTam; i++){
                                        if(i == telAlterar){
                                                this.clientes[this.clientePosicao].getTel[i] = telefoneFormatado
                                        }
                                }

                                break
                 }
                
                
                
        }

}