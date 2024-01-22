/**  * @jest-environment jsdom  */

import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirtsApp />', () => { 

    const title = 'Hola, Soy Goku';
    const subtitle = 'Hola soy un subtitle';

    test('debe de hacer match con el snapshot', () => { 
        const { container } = render(<FirstApp title={ title } />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {  
        render(<FirstApp title={title} /> );
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('debe de mostrar el titulo en h1', () => {  
        render(<FirstApp title={title} /> );
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('debe de mostrar el sutitulo enviado por props', () => {  
        render(<FirstApp title={title}  subtitle={subtitle}/> );
        expect(screen.getAllByText(subtitle).length).toBe(2);
    })
})