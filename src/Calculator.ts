export default class Calculator {

    public calc(s: string) {
        const splitStr = s.split('/')
        const divisionByZero = splitStr.some(char => parseFloat(char) === 0)
        if (divisionByZero) return undefined
        return eval(s);
    }
}
