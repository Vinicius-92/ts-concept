import { Data } from "../cidadesInfo";
import Utils from "../utils";
import Contato from "./lp-contato";

export default function BrandInfos(data: Data) {
    return (
        <div className="bg-white h-[490px] flex flex-col place-items-center justify-center">
                <p className="text-black text-3xl w-4/6 text-center">Na <strong className="font-sariaBlack">TS PNEUS</strong>, 
                estamos comprometidos em oferecer<strong className="font-sariaBlack"> os melhores pneus para o seu veículo, </strong> 
                garantindo <strong className="font-sariaBlack">segurança, desempenho e durabilidade.</strong> Por isso, temos uma ampla seleção de
                 <strong className="font-sariaBlack"> pneus {Utils.toPascalCase(data.brand)} disponíveis à pronta entrega.</strong> Conhecida por sua <strong className="font-sariaBlack">inovação e qualidade, </strong> 
                 a <strong className="font-sariaBlack">{Utils.toPascalCase(data.brand)} é uma marca confiável</strong> para todas as suas necessidades de condução.
                </p>
            <Contato info={data.info} brand={data.brand}></Contato>
        </div>
    )
}