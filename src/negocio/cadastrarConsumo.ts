import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";
import Consumo from "./consumo"

export default class CadastrarConsumo extends Cadastro{
        private clientes: Array<Cliente>
        private servicos: Array<Servico>
        private entrada: Entrada
        private consumos: Array<Consumo>

        constructor(clientes: Array<Cliente>,servicos: Array<Servico>,consumos: Array<Consumo>){
                super()
                this.clientes = clientes
                this.servicos = servicos
                this.entrada = new Entrada()
                this.consumos = consumos
        }

        public cadastrar(): void{
                let cpf = this.entrada.receberTexto('Digite o CPF do cliente: ')
                let nCliente
               for(var i = 0; i < this.clientes.length; i++){
                        if(this.clientes[i].getCpf.getValor == cpf){
                                console.log('Usuario Encontrado!')
                                let posCliente = i
                                nCliente = this.clientes[i]

                                let lenghtServico = this.servicos.length

                                console.log('\n-----------------------------------')
                                console.log('Serviços disponiveis')
                                for(var i =0; i < lenghtServico; i++){
                                        console.log(`${i} - ${this.servicos[i].nome}`)
                                }
                                let servicoOp = this.entrada.receberNumero('\nDigite o serviço consumido: ')
                 
                                for(var i =0; i < 10; i++){
                                        if(i == servicoOp){
                                                console.log('cheguei......')
                                                this.servicos[i].qtde =this.servicos[i].qtde + 1
                                                this.clientes[posCliente].setServicosConsumidos = this.servicos[i]
                                                let consumo = new Consumo(nCliente, this.servicos[i])
                                                this.consumos.push(consumo)
                                                console.log(this.consumos)
                 
                                        }                       
                                 }
                        }
               }

              
        }    

}