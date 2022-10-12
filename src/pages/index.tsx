import { Children, useState } from "react";
import Cliente from "../../client/cliente";
import Botao from "../components/botao";
import Formulario from "../components/formulario";
import Layout from "../components/layout";
import Tabela from "../components/tabela";

export default function Home() {
  function menorEditado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function menorApagado(cliente: Cliente) {
    console.log(`apagar ${cliente.nome}`);
  }

  const [visivel, setVisivel] = useState<"table" | "form">("table");

  const clientes = [
    new Cliente("1", "Bruno", 19),
    new Cliente("2", "Alice", 20),
    new Cliente("3", "Café", 30),
  ];

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
            onclick={() => setVisivel('form')}
            cor="green">Novo Cliente</Botao>
            <Tabela
              clientes={clientes}
              editarCadastro={menorEditado}
              apagarCadastro={menorApagado}
            ></Tabela>
          </>
        ) : (
          <>
            <Formulario cliente={clientes[1]} 
            cancelado={() => setVisivel('table')}/>
          </>
        )}
      </Layout>
    </div>
  );
}
