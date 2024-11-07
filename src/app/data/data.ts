import Pneu from "../models/pneu";

export default class Data {
    public static getModelsByBrand(brand: string): Pneu[] {
        return this.brands.get(brand.toLowerCase())!
    }

    private static volkswagen: Pneu[] = [
        {
            marca: 'Volkswagen',
            modelo: 'Taos High e Comfortline',
            dianteiros: '215/55R18',
            traseiros: '215/55R18'
        },
        {
            marca: 'Volkswagen',
            modelo: 'Jetta GLI',
            dianteiros: '225/45R18',
            traseiros: '225/45R18'
        },
        {
            marca: 'Volkswagen',
            modelo: 'Tiguan Comfortline',
            dianteiros: '235/55R18',
            traseiros: '235/55R18'
        },
        {
            marca: 'Volkswagen',
            modelo: 'Tiguan R-Line',
            dianteiros: '255/45R19',
            traseiros: '255/45R19'
        },
        {
            marca: 'Volkswagen',
            modelo: 'Amarok',
            dianteiros: '255/60R18',
            traseiros: '255/60R18',
            anoDe: 2022,
            anoA: 2022
        },
        {
            marca: 'Volkswagen',
            modelo: 'Virtus Exclusive',
            dianteiros: '205/45R18',
            traseiros: '205/45R18',
            anoDe: 2023,
            anoA: 2025
        },
        {
            marca: 'Volkswagen',
            modelo: 'ID.4  Pro Performance',
            dianteiros: '235/45R21',
            traseiros: '255/40R21'
        },
        {
            marca: 'Volkswagen',
            modelo: 'Polo GTS',
            dianteiros: '205/45R18',
            traseiros: '205/45R18'
        }
    ]

    private static honda: Pneu[] = [
        {
            marca: 'Honda',
            modelo: 'CRV',
            dianteiros: '235/60R18',
            traseiros: '235/60R18',
            anoDe: 2022,
            anoA: 2023
        },
        {
            marca: 'Honda',
            modelo: 'CRV',
            dianteiros: '235/55R19',
            traseiros: '235/55R19',
            anoDe: 2024,
            anoA: 2025
        },
        {
            marca: 'Honda',
            modelo: 'Accord',
            dianteiros: '235/45R18',
            traseiros: '235/45R18'
        }
    ]

    private static toyota: Pneu[] = [
        {
            marca: 'Toyota',
            modelo: 'Corolla Cross XRE / GR',
            dianteiros: '225/50R18',
            traseiros: '225/50R18'
        },
        {
            marca: 'Toyota',
            modelo: 'Corolla GR Core/Circuit',
            dianteiros: '235/40R18',
            traseiros: '235/40R18'
        },
        {
            marca: 'Toyota',
            modelo: 'SW4 SRX / Diamond',
            dianteiros: '265/60R18',
            traseiros: '265/60R18'
        },
        {
            marca: 'Toyota',
            modelo: 'RAV 4 SX Hybrid',
            dianteiros: '225/60R18',
            traseiros: '225/60R18'
        },
        {
            marca: 'Toyota',
            modelo: 'Hilux SV, SRV e SRX',
            dianteiros: '265/60R18',
            traseiros: '265/60R18',
        }
    ]

    private static chevrolet: Pneu[] = [
        {
            marca: 'Chevrolet',
            modelo: 'Equinox',
            dianteiros: '235/50R19',
            traseiros: '235/50R19'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            dianteiros: '245/40R20',
            traseiros: '275/35R20'
        },
        {
            marca: 'Chevrolet',
            modelo: 'S10 Z71/LTZ E HIGH',
            dianteiros: '265/60R18',
            traseiros: '265/60R18'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Silverado Highcountry',
            dianteiros: '275/60R20',
            traseiros: '275/60R20'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Trailblazer Highcountry',
            dianteiros: '265/60R18',
            traseiros: '265/60R18',
        }
    ]

    private static peugeot: Pneu[] = [
        {
            marca: 'Peugeot',
            modelo: '3008 Griffe',
            dianteiros: '235/50R19',
            traseiros: '235/50R19'
        }
    ]

    private static jeep: Pneu[] = [
        {
            marca: 'Jeep',
            modelo: 'Compass Black / Overland TD350 / Serie S',
            dianteiros: '235/45R19',
            traseiros: '235/45R19'
        },
        {
            marca: 'Jeep',
            modelo: 'Compass Longitude / Sport',
            dianteiros: '225/55R18',
            traseiros: '225/55R18'
        },
        {
            marca: 'Jeep',
            modelo: 'Renegade Longitude/Night Sahara',
            dianteiros: '225/55R18',
            traseiros: '225/55R18'
        },
        {
            marca: 'Jeep',
            modelo: 'Commander Limited/Longitude',
            dianteiros: '235/55R18',
            traseiros: '235/55R18'
        },
        {
            marca: 'Jeep',
            modelo: 'Commander Overland/Hurricane',
            dianteiros: '235/50R19',
            traseiros: '235/50R19',
        },
        {
            marca: 'Jeep',
            modelo: 'Grand Cherokee',
            dianteiros: '265/50R20',
            traseiros: '265/50R20',
        }
    ]

    private static bmw: Pneu[] = [
        {
            marca: 'BMW',
            modelo: '320I M Sport',
            dianteiros: '235/45R19',
            traseiros: '235/45R19',
            anoDe: 2019,
            anoA: 2024
        },
        {
            marca: 'BMW',
            modelo: '330I M Sport',
            dianteiros: '225/40R19',
            traseiros: '255/35R19',
            anoDe: 2019,
            anoA: 2024
        },
        {
            marca: 'BMW',
            modelo: 'Z4',
            dianteiros: '255/35R19',
            traseiros: '275/35R19'
        },
        {
            marca: 'BMW',
            modelo: 'X6 M50i',
            dianteiros: '275/35R22',
            traseiros: '315/30R22'
        },
        {
            marca: 'BMW',
            modelo: 'X4 M30i XDrive',
            dianteiros: '245/45R20',
            traseiros: '275/40R20',
        },
        {
            marca: 'BMW',
            modelo: 'X1 sDrive 18i',
            dianteiros: '225/55R18',
            traseiros: '225/55R18',
        },
        {
            marca: 'BMW',
            modelo: 'X1 sDrive 18i',
            dianteiros: '225/55R18',
            traseiros: '225/55R18',
            anoDe: 2019,
            anoA: 2022
        },
        {
            marca: 'BMW',
            modelo: 'X3 M40i',
            dianteiros: '245/40R21',
            traseiros: '275/35/R21',
            anoDe: 2024,
            anoA: 2024
        },
        {
            marca: 'BMW',
            modelo: 'X5 xDrive45e M Sport 21',
            dianteiros: '275/40/R21',
            traseiros: '315/40/R21'
        },
        {
            marca: 'BMW',
            modelo: 'X7 M50i',
            dianteiros: '275/40R22',
            traseiros: '315/35R22'
        }
    ]

    private static porsche: Pneu[] = [
        {
            marca: 'Porsche',
            modelo: '911 Turbo S',
            dianteiros: '255/35R20',
            traseiros: '315/30R21'
        },
        {
            marca: 'Porsche',
            modelo: '911 GT3 RS',
            dianteiros: '275/35R20',
            traseiros: '325/30R21'
        },
        {
            marca: 'Porsche',
            modelo: 'Panamera SE Hybrid',
            dianteiros: '275/35R21',
            traseiros: '325/30R21',
            anoDe: 2021,
            anoA: 2023
        },
        {
            marca: 'Porsche',
            modelo: 'Cayenne Turbo',
            dianteiros: '285/40R21',
            traseiros: '315/35R21',
            anoDe: 2019,
            anoA: 2023
        },
        {
            marca: 'Porsche',
            modelo: '718 Boxter / Cayman',
            dianteiros: '235/40/R19',
            traseiros: '265/40/R19',
        },
        {
            marca: 'Porsche',
            modelo: '911 Carrera / S / T',
            dianteiros: '245/35/R20',
            traseiros: '305/30/R21',
        },
        {
            marca: 'Porsche',
            modelo: '911 Carrera GTS',
            dianteiros: '255/35/R20',
            traseiros: '315/30/R21'
        },
        {
            marca: 'Porsche',
            modelo: '911 Carrera Cabriolet',
            dianteiros: '245/35/R20',
            traseiros: '305/30/R21'
        },
        {
            marca: 'Porsche',
            modelo: 'Macan GTS',
            dianteiros: '265/40R21',
            traseiros: '295/35R21'
        },
        {
            marca: 'Porsche',
            modelo: 'Macan T',
            dianteiros: '265/45R20',
            traseiros: '295/40R20'
        }
    ]

    private static brands: Map<String, Pneu[]> = new Map<String, Pneu[]>([
        ['volkswagen', this.volkswagen],
        ['honda', this.honda],
        ['toyota', this.toyota],
        ['chevrolet', this.chevrolet],
        ['peugeot', this.peugeot],
        ['jeep', this.jeep],
        ['bmw', this.bmw],
        ['porsche', this.porsche]
    ])
}