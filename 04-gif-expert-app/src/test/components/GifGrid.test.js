import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "Dragon ball";

  test("Debe de mostrar el <GifGrid> correctamnete", () => {
    useFetchGifs.mockReturnValue({ data: [], loading: true });
    const wrapper = shallow(<GifGrid category={category}></GifGrid>);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const imgs = [
      { id: "abc", url: "https://localhost/cosa.jpg", title: "Cualquier cosa" },
    ];
    useFetchGifs.mockReturnValue({ data: imgs, loading: false });
    const wrapper = shallow(<GifGrid category={category}></GifGrid>);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(imgs.length);
  });
});
