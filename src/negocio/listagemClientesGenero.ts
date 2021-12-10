import Consumo from "./consumo";
import Listagem from "./listagem";

export default class ListagemConsumo extends Listagem{
        private consumo: Array<Consumo>
        constructor(consumo: Array<Consumo>){
                super()
                this.consumo = consumo
        }

        public listar(): void {
            console.log('\nLista de todos os Consumos Por Gênero')
            console.log('\n------------------------------')
            console.log('\nFeminino')
            console.log('------------------------------')
            this.consumo.forEach(consumo => {
                    if(consumo.getCliente.genero == 'F' || consumo.getCliente.genero == 'f'){
                        console.log(`Nome: ` + consumo.getCliente.nome)
                        console.log(`CPF: ` + consumo.getCliente.getCpf.getValor)
                        console.log(`Gênero: ` + consumo.getCliente.genero)
                        console.log('Serviço: ' + consumo.getServico.nome)
                    }
            })
            console.log('\n------------------------------')
            console.log('\n')
            console.log('\nMasculino')
            console.log('------------------------------')
            this.consumo.forEach(consumo => {
                if(consumo.getCliente.genero == 'M' || consumo.getCliente.genero == 'm'){
                    console.log(`Nome: ` + consumo.getCliente.nome)
                    console.log(`CPF: ` + consumo.getCliente.getCpf.getValor)
                    console.log(`Gênero: ` + consumo.getCliente.genero.toLocaleUpperCase)
                    console.log('Serviço: ' + consumo.getServico.nome)
                        }
                })
        console.log('\n------------------------------')
        }
}