import CidadesInfo from "@/app/cidadesInfo";
import LpContentAros from "@/app/lps-components/lp-content-aros";
import LpFooter from "@/app/lps-components/lp-footer";
import LpHeader from "@/app/lps-components/lp-header";
import LpBannerRunflat from "../lps-components/lp-banner-runflat";

export default function Aro13() {
    const info = CidadesInfo.CAMPINAS;
    const brand = 'RUN-FLAT'

    const images = [
        '../landing-pages/run-flat/bridgestone.webp',
        '../landing-pages/run-flat/continental.webp',
        '../landing-pages/run-flat/delinte.webp',
        '../landing-pages/run-flat/goodyear.webp',
        '../landing-pages/run-flat/khmho.webp',
        '../landing-pages/run-flat/pirelli.webp',
        '../landing-pages/run-flat/speedmax.webp'
    ]

    return (
        <>
            <LpHeader info={info} brand={brand}></LpHeader>
            <LpBannerRunflat info={info} brand={brand}></LpBannerRunflat>
            <LpContentAros aro={brand} images={images}></LpContentAros>
            <LpFooter info={info} brand={brand}></LpFooter>
        </>
    )
}