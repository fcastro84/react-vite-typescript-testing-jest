import { returnArray } from "../../src/bases/07-desest-arrays";

describe('test to the file 07-desest-arrays', () => {
    
    test('Test with the function returnArray ', () => {
      
        const [ letters, numbers] = returnArray()

        expect( letters ).toBe('ABC')
        expect( numbers ).toBe(123)

        expect( typeof letters ).toBe('string')
        expect( typeof numbers ).toBe('number')

        expect( letters ).toEqual( expect.any(String) )
    })
    
});