import Cliente from "./cliente";

export default interface Clienterep {
    salvar(cliente: Cliente): Promise<Cliente>
    apagar(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}