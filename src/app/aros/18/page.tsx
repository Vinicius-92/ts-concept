import CidadesInfo from "@/app/cidadesInfo";
import ScriptsBrands from "@/app/components/scripts-brands";
import LpBannerAros from "@/app/lps-components/lp-banner-aros";
import LpContentAros from "@/app/lps-components/lp-content-aros";
import LpFooter from "@/app/lps-components/lp-footer";
import LpHeader from "@/app/lps-components/lp-header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comprar Pneus em Campinas",
    description: "Procurando Pneus aro 18 em Campinas? Clique Faça um Orçamento Na TS Pneus. Melhor Preço da Região.",
  };
export default function Aro14() {
    const info = CidadesInfo.CAMPINAS;
    const brand = '18'

    const images = [
        '../landing-pages/aros/aro18/bridgestone.png',
        '../landing-pages/aros/aro18/delinte.png',
        '../landing-pages/aros/aro18/kuhmo.png',
        '../landing-pages/aros/aro18/michelin.png',
        '../landing-pages/aros/aro18/speedmax.png',
        '../landing-pages/aros/aro18/yokohama.png',
    ]

    return (
        <>
        <body>
            <header>
                <ScriptsBrands></ScriptsBrands>
            </header>
            <LpHeader info={info} brand={brand}></LpHeader>
            <LpBannerAros info={info} brand={brand}></LpBannerAros>
            <LpContentAros aro={brand} images={images}></LpContentAros>
            <LpFooter info={info} brand={brand}></LpFooter>
        </body>
        </>
    )
}