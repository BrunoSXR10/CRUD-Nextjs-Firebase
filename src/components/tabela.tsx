import { TypeScriptConfig } from "next/dist/server/config-shared"
import Cliente from "../../client/cliente"
import { editar, lixo } from "./icons"

interface TabelaProps{
    clientes: Cliente[],
    editarCadastro?: (cliente : Cliente) => void
    apagarCadastro?: (cliente : Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    function renderCabecalho(){
        return(
            <tr>
                <th className='py-2'>Codigo</th>
                <th className='py-2'>Nome</th>
                <th className='py-2'>Idade </th>
                <th className='py-2'>Editar / Apagar</th>
            </tr> 
        )
    }

    function renderDados(){
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} 
                className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className='py-2 text-black'>{cliente.id}</td>
                    <td className='py-2 text-black'>{cliente.nome}</td>
                    <td className='py-2 text-black'>{cliente.idade}</td>
                    {renderAcao(cliente)}
                </tr>
            )
        })
    }

    function renderAcao(cliente: Cliente){

        return(
            <td className="w-1/3">
                <button className="text-emerald-700 rounded-xl p-2 m-1 hover:bg-white"
                onClick={() => props.editarCadastro?.(cliente)}>
                    {editar}</button>
                <button className="text-red-500 rounded-xl p-2 m-1 hover:bg-white"
                onClick={() => props.apagarCadastro?.(cliente)}>
                    {lixo}</button>
            </td>
        )
    }

    return(
        <table className=" w-full rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-b from-purple-700 via-purple-900 to-gray-500 text-gray-200">
                {renderCabecalho()}
            </thead>

            <tbody className="bg-gradient-to-b from-purple-700 via-purple-900 to-gray-500 text-gray-200">
                {renderDados()}
            </tbody>
        </table>
    )
}