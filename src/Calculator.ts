export default class Calculator {

    private unsafeDelimiters = ['+', '-', '*', '/', '^'];
    private safeDelimiters = ['rt'];

    public calc(s: string) {
        let delimiters = `[\\${this.unsafeDelimiters.join("\\")}]|${this.safeDelimiters.join('|')}`
        const pattern = `^([\\d\\s]+)(${delimiters})([\\s\\d]+)$`;

        const regex = new RegExp(pattern, "i");
        const parts = s.match(regex);

        if (parts && parts.length === 4) {
            const operator = parts[2];

            if (operator === '/') {
                const splitStr = s.split('/')
                const divisionByZero = splitStr.some(char => parseFloat(char) === 0)
                if (divisionByZero) return undefined
            }
            if (operator === "^") {
                return Math.pow(Number(parts[1]), Number(parts[3]))
            }
            if (operator === "rt") {
                return Math.pow(Number(parts[1]), 1/Number(parts[3]))
            }
            return eval(s);

        }
        throw new Error('cannot calculate');

    }
}
