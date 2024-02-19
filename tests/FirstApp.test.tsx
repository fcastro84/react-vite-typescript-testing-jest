import { render } from "@testing-library/react"
import FirstApp from '../src/FirstApp';
import React from "react";

describe(' Test in component <FirstApp/>', () => {

    // test('This has make to match with the snapshot ', () => {
      
    //     const title = 'Hola, soy Goku'
    //     const { container } = render( <FirstApp title={title} /> )

    //     expect( container ).toMatchSnapshot()

    // })

    test('this should display the title in an h1', () => {
      
        const title = 'Hola, soy Goku'
        const { getByText, getByTestId } = render( <FirstApp title={title} /> )

        expect( getByText(title) ).toBeTruthy()

        expect( getByTestId('test-title').innerHTML ).toContain(title)

        // const h1 = container.querySelector('h1')
        // expect( h1?.innerHTML ).toContain(title)

        

    })

    test('this should display the subtitle sent by props', () => {
      
        const title = 'Hola, soy Goku'
        const subTitle = 'Testing New'
        const { getByText, getAllByText  } = render( 
                 <FirstApp 
                        title={title} 
                        subTitle={subTitle}
                 /> 
                )

        expect( getByText(subTitle) ).toBeTruthy()

        expect( getAllByText(subTitle).length ).toBe(1)

        

        

    })
    
})