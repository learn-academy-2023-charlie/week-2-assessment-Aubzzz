const object1 = { number: 15 }
describe("object1", () => {
    it("returns number if divisible by 3", () => {
        expect(object1()).toEqual("15 is divisible by three")
    })
})
const firstNum = (object1) => {
    if(object1 % 3 === "yes" ) {
        return "15 is divisible by three"
    } else if (object1 % 3 === "no") {
        return "try again"
    }
}