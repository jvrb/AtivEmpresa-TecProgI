import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClienteMenosConsumo extends Listagem{
        private clientes: Array<Cliente>

        constructor(clientes: Array<Cliente> ){
                super()
                this.clientes =clientes
        }

        public listar(): void {
            this.clientes.sort(function(x,y): any {
                       if (x.getServicosConsumidos.length > y.getServicosConsumidos.length) return 1;
                       if(x.getServicosConsumidos.length < y.getServicosConsumidos.length) return -1;
                       return 0;
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