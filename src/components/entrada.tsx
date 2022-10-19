interface EntradaProps {
  tipo: string;
  texto: string;
  valor: any;
  somenteLeitura?: boolean;
  valorMudou?: (valor: any) => void;
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className="flex flex-col">
      <label>{props.texto}</label>
      <input 
        type={props.tipo} 
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        className={`border border-gray-900 
        rounded-md focus:outline-none px-4 py-2 bg-slate-100
         ${props.somenteLeitura ? '' : 'focus:bg-white'}
        `}  />
    </div>
  );
}
