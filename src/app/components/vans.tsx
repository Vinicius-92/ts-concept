export default function Vans() {
    return (
        <div className="bg-vans h-[520px] lg:h-[470px] bg-no-repeat	bg-cover bg-center flex-col lg:flex-row flex justify-center text-3xl lg:text-4xl lg:gap-10">
            <img src="apollo-logo.png" className="w-[214px] h-[83px] my-auto lg:mx-0 mx-auto" />
            <img src="apollo-pneus.png" className="lg:w-[475px] lg:h-[412px] w-11/12 mx-auto lg:mx-0 my-auto" />
            <div className="lg:my-auto lg:mx-0 mx-auto lg:text-start text-center">
                <p className="bold">ELEITO O MELHOR PNEU</p>
                <p className="lg:mb-5">DE VAN DO MUNDO!</p>
                <a href="" type="button" className="custom-buttom lg:text-3xl">CONSULTE</a>
            </div>
        </div>
    )
}