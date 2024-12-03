import { Data } from "../cidadesInfo"
import Utils from "../utils"

export default function LpHeader(data: Data) {
    return (
        <>
            <div className="h-[140px] bg-ts-gray flex justify-center place-items-center">
                <img src="logo.png" alt="Logo TS Pneus" className="h-[68px] w-[275px]" />
            </div>
            <div className="h-fit bg-black flex justify-center">
                <a href={`tel:${data.info.areaCode}${data.info.phone}`} className="flex">
                    <img src="landing-pages/phone.png" className="mt-2 h-6" />
                    <p className="text-2xl bold p-1">{Utils.formatFone(data.info.areaCode, data.info.phone)}  -  {data.info.city.toUpperCase()}</p>
                </a>
            </div>
        </>
    )
}