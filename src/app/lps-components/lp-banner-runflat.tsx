import { Data } from "../cidadesInfo"

export default function LpBannerAros(data: Data) {
    return (
        <div className="bg-lp-runflat-main bg-center bg-no-repeat bg-cover h-fit flex flex-col place-items-center justify-center gap-5 pt-10 pb-5">
            <div className="sm:flex place-items-center justify-center gap-10">
                <div className="flex flex-col place-items-center sm:pt-28 sm:pb-28">
                    <h1 className="font-sariaBlack text-5xl sm:text-6xl w-3/4 text-center"> 
                        COMPRE <span className="text-roleta-laranja">PNEUS RUN FLAT</span> EM {data.info.city.toUpperCase()}
                    </h1>
                </div>
            </div>
            <img src={`landing-pages/aros/${data.brand}/carros.png`} className="w-4/6 pt-10 hidden sm:inline" alt="" />
            <img src={`landing-pages/aros/${data.brand}/pneus.png`} className="w-8/12 sm:w-3/12" alt="" />
        </div>
    )
}