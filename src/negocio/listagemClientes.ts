import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
            let nRgs = cliente.getRgs.length
            console.log('RGS Cadastrados: ')
            for(var i = 0; i < nRgs; i++){
                console.log(`${i} - ` + cliente.getRgs[i].getValor)
            }
            console.log(`--------------------------------------`);
            let nTel = cliente.getTelefones.length
            console.log('Telefones Cadastrados: ')
            for(var i = 0; i<nTel; i++){
                console.log(`${i} - (${cliente.getTelefones[i].getDdd}) ${cliente.getTelefones[i].getNumero}`  )
            }
            console.log(cliente.getServicosConsumidos)
            console.log(`==========================`);
        });
        console.log(`\n`);
    }
}