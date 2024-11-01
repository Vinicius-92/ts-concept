export default function About() {
    return (
        <div className="h-[880px] lg:h-[420px] bg-somos bg-top lg:bg-left bg-no-repeat flex lg:flex-col justify-center">
            <div className="text-2xl w-11/12 lg:w-2/6 flex flex-col self-end">
                <p className="bold lg:mr-16 text-center lg:text-start">O MELHOR E MAIS COMPLETO AUTO CENTER DE CAMPINAS, LIMEIRA E REGIÃO</p><br />
                <p className="text-xl lg:mr-10 text-center lg:text-start">Com 24 anos de experiência no setor automotivo, valorizamos acima de tudo a <span className="bold">honestidade e transparência.</span><br /><br />
                        Com equipamentos de última geração <span className="bold">oferecemos o que há de melhor</span> para você e seu veículo.</p>
                <a href="" type="button" className="custom-buttom self-center">
                    CONFIRA NOSSAS AVALIAÇÕES
                </a>
            </div>
        </div>
    )
}