interface BotaoProps {
  children: any;
}

export default function Botao(props: BotaoProps) {
  return (
    <div className="flex justify-end py-2 pr-2">
      <button
        className={`bg-gradient-to-r
         from-emerald-500 to-emerald-900
         text-white rounded-md py-2 px-4
         `}
      >
        {props.children}
      </button>
    </div>
  );
}
