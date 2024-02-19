import { getImage } from "../../src/bases/12-async-await";

describe('Test of file 12-async-await', () => {
    
    test('getImage has return an URL of the image ', async() => {
      

        const url = await getImage()

        expect( typeof url ).toBe( 'string' )


    })
    
});