interface BotaoProps {
  children: any
  cor?: 'green'
  onclick?: () => void
}

export default function Botao(props: BotaoProps) {

  return (
    <div className="flex justify-end py-2 pr-2">
      <button
        onClick={props.onclick}
        className={`bg-gradient-to-r
         from-emerald-500 to-${props.cor}-900
         text-white rounded-md py-2 px-4
         inline-block
         `}
      >
        {props.children}
      </button>
    </div>
  );
}
