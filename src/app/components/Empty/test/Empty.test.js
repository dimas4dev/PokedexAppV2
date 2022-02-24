import { shallow } from "enzyme";
import { findDataTest } from "../../../utils/testFunctions/testFunctions";
import Empty from "../Empty";

const setUp = (props = {}) => {
  const component = shallow(<Empty {...props} />);
  return component;
};

describe("<Empty Component/>", () => {
  let component;
  beforeAll(() => {
    component = setUp();
  });
  it("<Empty/> should render without errors", () => {
    const wrapper = findDataTest(component, "Empty");
    expect(wrapper).toMatchSnapshot();
  });
});
