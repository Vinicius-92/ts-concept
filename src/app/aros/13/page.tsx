import CidadesInfo from "@/app/cidadesInfo";
import LpBannerAros from "@/app/lps-components/lp-banner-aros";
import LpContentAros from "@/app/lps-components/lp-content-aros";
import LpFooter from "@/app/lps-components/lp-footer";
import LpHeader from "@/app/lps-components/lp-header";

export default function Aro13() {
    const info = CidadesInfo.CAMPINAS;
    const brand = '13'

    const images = [
        '../landing-pages/aros/aro13/dunlop.png',
        '../landing-pages/aros/aro13/goodyear.png',
        '../landing-pages/aros/aro13/pirelli.png',
        '../landing-pages/aros/aro13/speedmax.png',
        '../landing-pages/aros/aro13/tornel.png',
        '../landing-pages/aros/aro13/west.png'
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