import { getImagen } from "../../src/base-pruebas/11-async-await";


describe('Pruebas de 11-async-await', () => { 
    test('getImagen debe retornar un error', async() => { 
        const resp = await getImagen();

        expect(resp).toBe('No se encontro la imagen');
    });
})