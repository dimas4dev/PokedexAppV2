import App from "../App";
import { shallow } from "enzyme";

describe("App component", () => {
  it("Should render the component succesfully", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
