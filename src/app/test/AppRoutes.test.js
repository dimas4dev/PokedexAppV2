import AppRoutes from "../AppRoutes";
import { shallow } from "enzyme";

describe("App component", () => {
  it("Should render the component succesfully", () => {
    const component = shallow(<AppRoutes />);
    expect(component).toMatchSnapshot();
  });
});
