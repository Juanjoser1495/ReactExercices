import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-string',()=>{
    test('GetSaludoMustReturnHolaJuan',()=>{
        const nombre = 'Juan';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe("Hola "+ nombre);
    });

    test('GetSaludoMustReturnHolaCarlosWithoutArguments',()=>{
        const nombre = 'Carlos';
        const saludo = getSaludo();

        expect(saludo).toBe("Hola "+ nombre);
    });
});