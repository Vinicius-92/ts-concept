export default class Utils {
    static toPascalCase(value: string): string {
        let arr = value.split(' ');
        arr.forEach(item => {
            let aux = item.charAt(0)
            arr[arr.indexOf(item)] = item.replace(/^./, aux.toUpperCase())
        }) 
        return arr.join(' ');
    }

    static formatFone(areaCode: string, phone: string): string {
        return `(${areaCode}) ${phone.slice(0, 4)}-${phone.slice(4)}`
    }
}