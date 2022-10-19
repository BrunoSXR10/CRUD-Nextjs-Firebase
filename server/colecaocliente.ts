import Cliente from "../client/cliente";
import cliente from "../client/cliente";
import Clienterep from "../client/clienterep";
import firebase from "./config";

export default class ColecaoCliente implements Clienterep {

    conversor = {
        toFirestore(cliente : Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) {
            const dados = snapshot.data(options)
            return new Cliente(snapshot.id, dados.nome, dados.idade)
        }
    }

    async salvar(cliente: cliente): Promise<cliente> {
        if (cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async apagar(cliente: cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<cliente[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
        .firestore().collection('clientes')
        .withConverter(this.conversor)
    }
}
