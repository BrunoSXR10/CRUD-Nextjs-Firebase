export default function Titulo(props) {

    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-center font-semibold text-2xl">
                {props.children}
            </h1>
            <hr className="border-2 border-purple-800"/>
        </div>
    )
}