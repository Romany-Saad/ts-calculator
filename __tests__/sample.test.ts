import Calculator from "../src/Calculator";

describe('calculator', () => {
    test("it can sum two numbers", () => {
        const c = new Calculator();
        expect(c.calc("2 + 2")).toEqual(4)

        expect(c.calc("2 + 3")).toEqual(5)
    })
})