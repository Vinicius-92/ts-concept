
export default class CidadesInfo {
    static readonly LIMEIRA: Info = {
        city: 'Limeira',
        areaCode: '19',
        phone: '34415051',
        whatsapp: '987227675'
    }
    
    static readonly CAMPINAS: Info = {
        city: 'Campinas',
        areaCode: '19',
        phone: '21214067',
        whatsapp: '21214067'
    }

    private cities: Map<string, object> = new Map([
        ["LIMEIRA", CidadesInfo.LIMEIRA],
        ["CAMPINAS", CidadesInfo.CAMPINAS],
    ]);


    getInfoByCityName(city: string) {
        return this.cities.get(city.toUpperCase())
    }
}

export interface Info {
    readonly city: string;
    readonly areaCode: string;
    readonly phone: string;
    readonly whatsapp: string;
}

export interface Data {
    info: Info;
    brand: string;
}