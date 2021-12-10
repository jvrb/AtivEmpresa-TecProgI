import Consumo from "./consumo";
import Listagem from "./listagem";

export default class ListagemConsumo extends Listagem{
        private consumo: Array<Consumo>
        constructor(consumo: Array<Consumo>){
                super()
                this.consumo = consumo
        }

        public listar(): void {
            console.log('\nLista de todos os Consumos')
            this.consumo.forEach(consumo => {
                    console.log(`Nome: ` + consumo.getCliente.nome)
                    console.log(`CPF: ` + consumo.getCliente.getCpf.getValor)
                    console.log('Serviço: ' + consumo.getServico.nome)
            })
        }
}