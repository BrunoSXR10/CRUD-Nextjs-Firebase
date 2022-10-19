import { Children, useEffect, useState } from "react";
import Cliente from "../../client/cliente";
import Clienterep from "../../client/clienterep";
import ColecaoCliente from "../../server/colecaocliente";
import Botao from "../components/botao";
import Formulario from "../components/formulario";
import Layout from "../components/layout";
import Tabela from "../components/tabela";

export default function Home() {

  const repo: Clienterep = new ColecaoCliente()
  
  const [client, setClient] = useState<Cliente>(Cliente.void())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState< "table" | "form" >("table");

  useEffect(obterTodos, [])
  
  function obterTodos() {
    repo.obterTodos().then((clientes => {
      setClientes(clientes)
      setVisivel('table')
    }))

  }

  function menorEditado(client: Cliente) {
    setClient(client)
    setVisivel('form')
  }

  async function menorApagado(client: Cliente) {
    await repo.apagar(client)
    obterTodos()
  }

  function novoCliente() {
    setClient(Cliente.void())
    setVisivel('form')
  }

  async function salvarCliente(client : Cliente) {
    await repo.salvar(client)
    obterTodos()
  }


  return (
    <div
      className={`
      flex justify-center h-screen items-center
       bg-gradient-to-b from-purple-700 via-purple-900 to-black
    `}
    >
      <Layout Titulo="Cadastro Simples">
        {visivel === "table" ? (
          <>
            <Botao 
            onclick={novoCliente}
            cor="green">Novo Cliente</Botao>
            <Tabela
              clientes={clientes}
              editarCadastro={menorEditado}
              apagarCadastro={menorApagado}
            ></Tabela>
          </>
        ) : (
          <>
            <Formulario cliente={client} 
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('table')
            }/>
          </>
        )}
      </Layout>
    </div>
  );
}
