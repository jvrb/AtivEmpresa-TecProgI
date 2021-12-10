import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClienteMaisConsumo extends Listagem{
        private clientes: Array<Cliente>

        constructor(clientes: Array<Cliente> ){
                super()
                this.clientes =clientes
        }

        public listar(): void {
            this.clientes.sort(function(x,y): number {
                        return x.getServicosConsumidos.length - x.getServicosConsumidos.length
            })

            if(this.clientes.length >= 10){
                for(var i =0; i< 10; i++){
                    console.log('\n------------------------------------')
                    console.log('Nome: ' + this.clientes[i].nome)
                    console.log('CPF: ' + this.clientes[i].getCpf.getValor)
                    console.log(`Quantidade de serviços consumidos: ${this.clientes[i].getServicosConsumidos.length}`)
                    console.log('\n------------------------------------')
                    console.log('\n')
                }
            }else{
                for(var i =0; i< this.clientes.length; i++){
                    console.log('\n------------------------------------')
                    console.log('Nome: ' + this.clientes[i].nome)
                    console.log('CPF: ' + this.clientes[i].getCpf.getValor)
                    console.log(`Quantidade de serviços consumidos: ${this.clientes[i].getServicosConsumidos.length}`)
                    console.log('\n------------------------------------')
                    console.log('\n')
                }
            }
        }
}