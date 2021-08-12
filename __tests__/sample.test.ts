import Calculator from "../src/Calculator";

describe('calculator', () => {
    test("it can sum two numbers", () => {
        const c = new Calculator();
        expect(c.calc("2 + 2")).toEqual(4)
        expect(c.calc("2 + 3")).toEqual(5)
    })

    test("it can subtract two numbers", () => {
        const c = new Calculator();
        expect(c.calc("2 - 2")).toEqual(0)
        expect(c.calc("2 - 3")).toEqual(-1)
    })

    test("it can multiply two numbers", () => {
        const c = new Calculator();
        expect(c.calc("2 * 2")).toEqual(4)
        expect(c.calc("2 * 3")).toEqual(6)
    })

    test("it can divide two numbers", () => {
        const c = new Calculator();
        expect(c.calc("2 / 2")).toEqual(1)
        expect(c.calc("2 / 3")).toEqual(2/3)
        expect(c.calc("2 / 0")).toEqual(undefined)
    })
})
