import { shallow } from "enzyme";
import { findDataTest } from "../../../utils/testFunctions/testFunctions";
import Footer from "../Footer";

const setUp = (props = {}) => {
  const component = shallow(<Footer {...props} />);
  return component;
};

describe("<Footer Component/>", () => {
  let component;
  beforeAll(() => {
    component = setUp();
  });
  it("<Footer /> should render without errors", () => {
    const wrapper = findDataTest(component, "footer");
    expect(wrapper).toMatchSnapshot();
  });
});
