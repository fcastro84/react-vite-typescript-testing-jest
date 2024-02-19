import { render, screen } from "@testing-library/react"
import FirstApp from '../src/FirstApp';
import React from "react";

describe(' Test in component <FirstApp/>', () => {

    const title = 'Hola, soy Goku'
    const subTitle = 'Testing New'

    test('This has make to match with the snapshot ', () => {
      
        
        const { container } = render( <FirstApp title={title} /> )

        expect( container ).toMatchSnapshot()

    })

    test('This has what view of title in h1', () => {
      
        render( <FirstApp title={title} /> )

        expect( screen.getByText(title) ).toBeTruthy()

        expect( screen.getByTestId('test-title').innerHTML ).toContain(title)

        expect( screen.getByRole('heading', { level: 1}).innerHTML).toContain(title)  

    })

    test('This has what view of subTitle sending by props', () => {
      
        render( 
                 <FirstApp 
                        title={title} 
                        subTitle={subTitle}
                 /> 
                )

        expect( screen.getByText(subTitle) ).toBeTruthy()

        expect( screen.getAllByText(subTitle).length ).toBe(1)

        

        

    })
    
})