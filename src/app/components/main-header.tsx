export default function MainHeader() {
    return (
        <div className="bg-main h-[540px] bg-center flex-col flex justify-center text-3xl lg:text-4xl">
            <p className="mx-auto bold -mt-20 mb-14">PNEUS ARO 18 ACIMA, CONHEÇA:</p>
            <img className="h-72 w-60 mx-auto lg:mb-10 lg:mx-80 xl:mx-4/6" src="ts-concept.webp" />
            <button hidden>
                <img className="w-36 mx-auto" src="saiba.webp" />
            </button>
        </div>
    )
}