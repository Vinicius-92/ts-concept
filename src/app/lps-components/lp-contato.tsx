import { Data } from "../cidadesInfo";
import Utils from "../utils";

export default function Contato(data: Data) {
    return (
        <div className="sm:flex place-items-center justify-center mt-5 gap-8">
            <a href="tel:1934415051" className="flex border-2 p-3 border-black bg-white *:invert hover:invert">
                <img src="landing-pages/phone.png" className="h-6 sm:h-8" />
                <p className="text-1xl sm:text-2xl pl-3">LIGUE AGORA <strong className="font-sariaBlack">{Utils.formatFone(data.info.areaCode, data.info.phone)}</strong></p>
            </a>
            <a href={`https://api.whatsapp.com/send/?phone=55${data.info.areaCode}${data.info.phone}&text=Ol%C3%A1%21%21%0A%0AVim+do+Site+da+TS+Pneus%2C+e+gostaria+de+saber+sobre+as+ofertas%21&type=phone_number&app_absent=0`} 
                className="flex bg-white text-black hover:invert p-3 mt-3 sm:mt-0">
                <img src="landing-pages/whatsapp.svg" className="h-6" />
                <p className="text-1xl sm:text-2xl pl-3">FALE NO WHATSAPP</p>
            </a>
        </div>
    )
}