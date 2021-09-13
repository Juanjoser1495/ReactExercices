import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  const title = "A title";
  const url = "https://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url}></GifGridItem>);
  test("Debe de mostrar el <GifGridItem> correctamnete", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("Debe de tener src y alt en la img", () => {
    const img = wrapper.find("img");
    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  });

  test("Debe de tener la clase card", () => {
    const div = wrapper.find("div");
    expect(div.props().className).toContain("card");
  });
});
