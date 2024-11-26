export default function MainHeader() {
    return (
        <div className="bg-main h-[540px] bg-center flex-col flex justify-center text-3xl lg:text-4xl">
            <p className="mx-auto bold  mb-14">PNEUS ARO 17 ACIMA, CONHEÇA:</p>
            <div className="lg:w-4/6">
                <img className="h-60 w-60 mx-auto" src="concept/logo-concept.png" />
            </div>
            <a href="/concept">
                <img className="w-36 pt-8 mx-auto" src="saiba.webp" />
            </a>
        </div>
    )
}