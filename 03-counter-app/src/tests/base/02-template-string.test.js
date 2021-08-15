import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-string',()=>{
    test('GetSaludoMustReturnHolaJuan',()=>{
        const nombre = 'Juan';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe("Hola "+ nombre);
    });
});