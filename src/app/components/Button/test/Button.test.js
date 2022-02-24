import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
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
});
