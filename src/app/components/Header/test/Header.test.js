import React from "react";
import { shallow } from "enzyme";
import { findDataTest } from "../../../utils/testFunctions/testFunctions";
import Header from "../Header";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("<Header Component/>", () => {
  let component;
  beforeAll(() => {
    component = setUp();
  });
  it("<Header/> should render without errors", () => {
    const wrapper = findDataTest(component, "Header");
    expect(wrapper.length).toBe(1);
  });
  it("Should render a logo", () => {
    const logo = findDataTest(component, "Header-Img");
    expect(logo.length).toBe(1);
  });
  describe("Home Link", () => {
    it("Should render the Home link", () => {
      const link = findDataTest(component, "Header-Link-Home");
      expect(link.length).toBe(1);
    });
    it("Should send to the Home page when it is clicked", () => {
      const button = findDataTest(component, "Header-Link-Home");
      button.simulate("click");
    });
  });
  describe("Store Link", () => {
    it("Should render the Store link", () => {
      const link = findDataTest(component, "Header-Link-Store");
      expect(link.length).toBe(1);
    });
    it("Should send to the Store page when it is clicked", () => {
      const button = findDataTest(component, "Header-Link-Store");
      button.simulate("click");
    });
  });
  describe("Dropdown Button", () => {
    it("Should render the Dropdown Button", () => {
      const links = findDataTest(component, "Header-DropdownBtn");
      expect(links.length).toBe(1);
    });
    it("Should open the Dropdown when it is clicked", () => {
      const button = findDataTest(component, "Header-DropdownBtn");
      button.simulate("click");
    });
  });
});
