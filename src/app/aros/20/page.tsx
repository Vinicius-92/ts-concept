import CidadesInfo from "@/app/cidadesInfo";
import LpBannerAros from "@/app/lps-components/lp-banner-aros";
import LpContentAros from "@/app/lps-components/lp-content-aros";
import LpFooter from "@/app/lps-components/lp-footer";
import LpHeader from "@/app/lps-components/lp-header";

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
            <LpHeader info={info} brand={brand}></LpHeader>
            <LpBannerAros info={info} brand={brand}></LpBannerAros>
            <LpContentAros aro={brand} images={images}></LpContentAros>
            <LpFooter info={info} brand={brand}></LpFooter>
        </>
    )
}