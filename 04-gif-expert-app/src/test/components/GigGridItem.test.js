import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  const title = "A title";
  const url = "https://localhost/algo.jpg";
  test("Debe de mostrar el <GifGridItem> correctamnete", () => {
    let wrapper = shallow(<GifGridItem title={title} url={url}></GifGridItem>);
    expect(wrapper).toMatchSnapshot();
  });
});
