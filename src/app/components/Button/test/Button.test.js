import React from "react";
import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import Button from "../Button";

describe("unit tests Button", () => {
  it("It should display the component correctly <Button />", () => {
    const wrapper = shallow(
      <Button
        textButton={"ADD"}
        char={{ id: 1, name: "bulbasaur" }}
        addPokemons={() => {}}
        removePokemons={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  // it("It should render 'Add' if prop.textButton is 'Add'  ", () => {
  //   const wrapper = shallow(
  //     <Button
  //       textButton="Add"
  //       char={{ id: 1, name: "bulbasaur" }}
  //       addPokemons={() => {}}
  //       removePokemons={() => {}}
  //     />
  //   );
  //   expect(wrapper.find("button").at(0).text()).toEqual("Add");
  // });
});
