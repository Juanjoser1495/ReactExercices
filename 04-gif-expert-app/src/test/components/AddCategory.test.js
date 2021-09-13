import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = () => {};
  const wrapper = shallow(
    <AddCategory setCategories={setCategories}></AddCategory>
  );
  test("Debe de mostrar el <AddCategory> correctamnete", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
