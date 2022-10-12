import { useState } from "react";
import Cliente from "../../client/cliente";
import Botao from "./botao";
import Entrada from "./entrada";

interface FormularioProps {
  cliente: Cliente;
  cancelado?: () => void
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

    <div className='flex flex-row justify-end mt-8 mr-3'>

    <button className={`bg-gradient-to-r
         from-emerald-500 to-emerald-900
         text-white rounded-md py-2 px-4
         inline-block
         `}>Salvar</button>

    <button className={`bg-gradient-to-r
         from-red-500 to-red-900
         text-white rounded-md py-2 px-4
         inline-block ml-5
         `}
         onClick={props.cancelado}>Cancelar</button>

    </div>
    </div>
  );
}
