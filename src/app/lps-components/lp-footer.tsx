import { Data } from "../cidadesInfo"

export default function LpFooter(data: Data) {
    return (
        <footer className="bg-black h-fit p-4 pt-10 flex flex-col align-middle justify-center bottom-0">
            <div className="flex justify-center m-6">
                <img className="w-72" src="../logo.png" />
            </div>
            <a href={"tel:" + data.info.areaCode  + data.info.phone} className="flex justify-center mb-6">
                <img src="../landing-pages/phone.png" className="mt-2 h-6" />
                <p className="text-2xl bold p-1">({data.info.areaCode}) {data.info.phone.slice(0, 3)}-{data.info.phone.slice(3)} - {data.info.city.toUpperCase()}</p>
            </a>
            <hr className="w-full" />
            <div className="flex flex-col w-10/12 mx-auto text-center m-3 text-lg lg:flex-row lg:place-content-between">
                <p>TS PNEUS LTDA.© 2024 | Todos os direitos reservados </p>
                <div className="flex justify-center mt-3 lg:mt-0 lg:justify-end">
                    <p>Desenvolvido por:</p>
                    <img className="h-8 ml-3" src="../logo-ouro-preto-min.png" />
                </div>
            </div>
        </footer>
    )
}