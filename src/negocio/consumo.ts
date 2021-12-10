import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";

export default class Consumo{
        private cliente: Cliente
        private servico: Servico

        constructor(cliente: Cliente,servico: Servico ){
                this.cliente = cliente
                this.servico = servico
        }

        public get getCliente(){
                return this.cliente
        }

        public get getServico(){
                return this.servico
        }
}