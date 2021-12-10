import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {

        private servicos: Array<Servico>;
        constructor(servicos: Array<Servico>) {
                super();
                this.servicos = servicos;
        }

        public listar(): void {
               console.log(`\nListagem dos serviços disponiveis`);
               this.servicos.forEach(servico => {
                console.log(`Nome: ` + servico.nome);
                console.log(`--------------------------------------`);
            });
            console.log(`\n`);
        }
}
