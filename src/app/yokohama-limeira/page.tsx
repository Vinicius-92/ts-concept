import CidadesInfo from "../cidadesInfo";
import ScriptsBrands from "../components/scripts-brands";
import BrandInfos from "../lps-components/brand-infos";
import LpBanner from "../lps-components/lp-banner";
import LpFooter from "../lps-components/lp-footer";
import LpHeader from "../lps-components/lp-header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comprar Pneus em Limeira",
    description: "Procurando Pneus Yokohama em Limeira? Clique Faça um Orçamento Na TS Pneus. Melhor Preço da Região.",
  };
export default function Delinte() {
    const data = CidadesInfo.LIMEIRA;
    const brand = 'yokohama';
    return (
        <>
        <body>
            <header>
                <ScriptsBrands></ScriptsBrands>
            </header>
            <LpHeader info={data} brand={brand}></LpHeader>
            <LpBanner info={data} brand={brand}></LpBanner>
            <BrandInfos brand={brand} info={data}></BrandInfos>
            <LpFooter info={data} brand={brand}></LpFooter>
        </body>
        </>
    )
}