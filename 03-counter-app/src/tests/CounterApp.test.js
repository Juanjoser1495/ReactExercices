import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en <CounterApp />", () => {
  let wrapper = shallow(<CounterApp></CounterApp>);
  beforeEach(() => {
    wrapper = shallow(<CounterApp></CounterApp>);
  });

  test("Debe de mostrar el <CounterApp> correctamnete", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el value enviado por props", () => {
    const value = "100";
    const wrapper = shallow(<CounterApp value={100}></CounterApp>);
    const returned = wrapper.find("h3").text();
    expect(returned).toBe(value);
  });

  test("Debe incrementar con el boton +1", () => {
    wrapper.find("button").at(1).simulate("click");
    const returned = wrapper.find("h3").text();
    expect(returned).toBe("1");
  });

  test("Debe reducir con el boton -1", () => {
    wrapper.find("button").at(3).simulate("click");
    const returned = wrapper.find("h3").text();
    expect(returned).toBe("-1");
  });
});
