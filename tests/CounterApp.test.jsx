import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas de <CounterApp/>', () => {  
    const name = 'Counter App!!'
    const value = 100;

    test('debe de hacer match con el snapshot', () => {  
        const { container } = render(<CounterApp name={ name } />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100', () => { 
        render(<CounterApp name={ name } value={ value }/> );
        expect(screen.getByText(value)).toBeTruthy();

        //expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(`${value}`);
    });

    test('debe de incrementar con el boton +1', () => {  
        render(<CounterApp name={ name } value={ value }/> );
        fireEvent.click( screen.getByText('+1') );

        expect(screen.getByText('101')).toBeTruthy();

    });

    test('debe de decrementar con el boton -1', () => {  
        render(<CounterApp name={ name } value={ value }/> );
        fireEvent.click( screen.getByText('-1') );

        expect(screen.getByText('99')).toBeTruthy();

    });

    test('debe de funcionar el boton de reset', () => {  
        render(<CounterApp name={ name } value={ value }/> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect(screen.getByText('100')).toBeTruthy();

    });
})