export default function Footer() {
    return (
        <footer className="bg-black h-fit p-4 flex flex-col align-middle justify-center bottom-0">
            <div className="flex flex-row justify-center text-2xl">
                <p className="pt-1">SIGA NOSSO INSTA</p>
                <a href="">
                    <img className="w-[38px] h-[38px] ml-3" src="ig-logo.svg"/>
                </a>
            </div>
            <div className="flex justify-center m-6">
                <img className="w-72" src="logo.png" />
            </div>
            <hr className="w-full" />
            <div className="flex flex-col w-10/12 mx-auto text-center m-3 text-lg lg:flex-row lg:place-content-between">
                <p>TS PNEUS LTDA.© 2024 | Todos os direitos reservados </p>
                <div className="flex justify-center mt-3 lg:mt-0 lg:justify-end">
                    <p>Desenvolvido por:</p>
                    <img className="h-8 ml-3" src="logo-ouro-preto-min.png" />
                </div>
            </div>
        </footer>
    )
}