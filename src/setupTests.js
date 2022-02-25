import Enzyme from "enzyme";
import { createSerializer } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
