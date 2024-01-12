import { useContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas de 06-deses-obj', () => { 
    test('useContext debe retornar un objeto', () => { 
        const testPersona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const user = useContext(testPersona);

        expect(user).toStrictEqual({
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    })
})