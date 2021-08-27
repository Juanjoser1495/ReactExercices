import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimerApp";

describe("Pruebas en <PrimeraApp />", () => {
  //   test("Debe de mostrar el mensaje 'Hola Soy Goku'", () => {
  //     const saludo = "Hola Soy Goku";
  //     const { getByText } = render(<PrimeraApp saludo={saludo}></PrimeraApp>);
  //     expect(getByText(saludo)).toBeInTheDocument();
  //   });

  test("Debe de mostrar el <PrimeraApp> correctamnete", () => {
    const saludo = "Hola Soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo}></PrimeraApp>);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola Soy Goku";
    const subtitulo = "Soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo}></PrimeraApp>
    );
    const returned = wrapper.find("h3").text();
    expect(returned).toBe(subtitulo);
  });
});
