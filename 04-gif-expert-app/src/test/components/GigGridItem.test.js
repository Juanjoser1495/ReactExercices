import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  test("Debe de mostrar el <GifGridItem> correctamnete", () => {
    let wrapper = shallow(<GifGridItem></GifGridItem>);
    expect(wrapper).toMatchSnapshot();
  });
});
