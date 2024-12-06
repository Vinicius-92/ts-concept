import CidadesInfo from "@/app/cidadesInfo";
import ScriptsBrands from "@/app/components/scripts-brands";
import LpBannerAros from "@/app/lps-components/lp-banner-aros";
import LpContentAros from "@/app/lps-components/lp-content-aros";
import LpFooter from "@/app/lps-components/lp-footer";
import LpHeader from "@/app/lps-components/lp-header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comprar Pneus em Campinas",
    description: "Procurando Pneus aro 20 em Campinas? Clique Faça um Orçamento Na TS Pneus. Melhor Preço da Região.",
  };
export default function Aro14() {
    const info = CidadesInfo.CAMPINAS;
    const brand = '20'

    const images = [
        '../landing-pages/aros/aro20/continental.png',
        '../landing-pages/aros/aro20/delinte.png',
        '../landing-pages/aros/aro20/kuhmo.png',
        '../landing-pages/aros/aro20/pirelli.png',
        '../landing-pages/aros/aro20/yokohama.png',
        '../landing-pages/aros/aro20/speedmax.png'
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