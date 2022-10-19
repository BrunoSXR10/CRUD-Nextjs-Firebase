import { useState } from "react";
import Cliente from "../../client/cliente";
import Botao from "./botao";
import Entrada from "./entrada";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente : Cliente) => void
  cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {

  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div className="">
      <Entrada tipo='text' somenteLeitura texto="Código" valor={id} />

      <Entrada tipo='text' valor={nome} texto='nome' valorMudou={setNome}/>

      <Entrada tipo='number' valor={idade} texto='idade' valorMudou={setIdade}/>

    <div className='flex flex-row justify-end mt-8 mr-3'>

    <button className={`bg-gradient-to-r
         from-emerald-400 to-emerald-800
         text-white rounded-md py-2 px-4
         inline-block
         `}

         onClick={() => props.clienteMudou?.(new Cliente(id, nome, +idade))}>Salvar</button>

    <button className={`bg-gradient-to-r
         from-red-400 to-red-800
         text-white rounded-md py-2 px-4
         inline-block ml-5
         `}

         onClick={props.cancelado}>Cancelar</button>

    </div>
    </div>
  );
}
