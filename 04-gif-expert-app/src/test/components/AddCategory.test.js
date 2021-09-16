import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(
    <AddCategory setCategories={setCategories}></AddCategory>
  );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <AddCategory setCategories={setCategories}></AddCategory>
    );
  });

  test("Debe de mostrar el <AddCategory> correctamnete", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe de postear info onsubmit", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
});
