import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Pruebas en <HookApp />", () => {
  test("Debe de mostrar el <HookApp> correctamnete", () => {
    const wrapper = shallow(<HookApp></HookApp>);
    expect(wrapper).toMatchSnapshot();
  });
});
