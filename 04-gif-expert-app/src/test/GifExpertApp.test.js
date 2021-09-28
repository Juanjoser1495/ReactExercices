import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas en <GifGrid />", () => {
  test("Debe de mostrar el <GifExpertApp> correctamnete", () => {
    const wrapper = shallow(<GifExpertApp></GifExpertApp>);
    expect(wrapper).toMatchSnapshot();
  });
});
