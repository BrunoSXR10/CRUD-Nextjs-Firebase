import Titulo from "./titulo"

interface LayoutProps{
Titulo: string
children: any
}

export default function Layout(props: LayoutProps) {

    return(
        <div className={`
        flex flex-col w-2/3 ml-60 mr-60
        bg-white text-gray-900 rounded-md
        `}>
            <Titulo>{props.Titulo}</Titulo>
            <div className=" flex flex-col text-center py-2 px-3">
                {props.children}
            </div>

        </div>

    )
}