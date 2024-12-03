import { Info, Data } from "../cidadesInfo"

export default function LpBanner(data: Data) {
    return (
        <div className="bg-lp-main bg-center bg-no-repeat bg-cover h-fit flex flex-col place-items-center justify-center gap-5 pt-10 pb-5">
            <div className="sm:flex place-items-center justify-center gap-10">
                <div className="flex flex-col place-items-center">
                    <h1 className="font-sariaBlack text-5xl sm:text-6xl">PNEUS {data.brand.toUpperCase()}</h1>
                    <h2 className="font-sariaBold text-4xl sm:text-5xl">EM {data.info.city.toUpperCase()}</h2>
                </div>
                <img src={`landing-pages/${data.brand}/logo.png`} className="w-[250px] h-auto pt-2 sm:pt-0 sm:w-[359px] sm:h-[66px]" alt="" />
            </div>
            <img src={`landing-pages/${data.brand}/carros.png`} className="w-4/6 pt-10 hidden sm:inline" alt="" />
            <img src={`landing-pages/${data.brand}/pneus.png`} className="w-8/12 sm:w-3/12" alt="" />
        </div>
    )
}