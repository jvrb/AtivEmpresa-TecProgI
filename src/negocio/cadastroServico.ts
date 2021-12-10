import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
        private servicos: Array<Servico>;
        private entrada: Entrada;
        constructor(servicos: Array<Servico>) {
                super();
                this.servicos = servicos;
                this.entrada = new Entrada();
        }

        public cadastrar(): void {
                console.log(`\nInicio do cadastro de um serviço: `);
                let nomeServico = this.entrada.receberTexto(`Por favor, digite um nome para o serviço a ser cadastrado: `)
                let precoServico = this.entrada.receberNumero('Por favor, digite um valor para o serviço a ser cadastrado: R$ ')
                let qtde = 0
                let servico = new Servico();
                servico.nome = nomeServico;
                servico.preco = precoServico
                servico.qtde = qtde
                this.servicos.push(servico);
        }
}
