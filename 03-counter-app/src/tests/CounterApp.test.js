import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en <CounterApp />", () => {
  test("Debe de mostrar el <CounterApp> correctamnete", () => {
    const wrapper = shallow(<CounterApp></CounterApp>);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el value enviado por props", () => {
    const value = "100";
    const wrapper = shallow(<CounterApp value={100}></CounterApp>);
    const returned = wrapper.find("h3").text();
    expect(returned).toBe(value);
  });
});
