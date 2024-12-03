import CidadesInfo from "../cidadesInfo";
import BrandInfos from "../lps-components/brand-infos";
import LpBanner from "../lps-components/lp-banner";
import LpFooter from "../lps-components/lp-footer";
import LpHeader from "../lps-components/lp-header";

export default function Delinte() {
    const data = CidadesInfo.CAMPINAS;
    const brand = 'continental';
    return (
        <>
            <LpHeader info={data} brand={brand}></LpHeader>
            <LpBanner info={data} brand={brand}></LpBanner>
            <BrandInfos brand={brand} info={data}></BrandInfos>
            <LpFooter info={data} brand={brand}></LpFooter>
        </>
    )
}