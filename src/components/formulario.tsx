import { useState } from "react";
import Cliente from "../../client/cliente";
import Entrada from "./entrada";

interface FormularioProps {
  cliente: Cliente;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div className="">
      <Entrada somenteLeitura texto="Código" valor={id} />

      <Entrada texto="Nome" valor={nome} valorMudou={setNome}/>

      <Entrada texto="Idade" valor={idade} valorMudou={setIdade}/>

      
    </div>
  );
}
