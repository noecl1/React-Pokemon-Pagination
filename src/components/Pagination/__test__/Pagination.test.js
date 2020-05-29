import React from "react";
import ReactDOM from "react-dom";
import Pagination from "../Pagination";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders Pagination Button without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Pagination></Pagination>, div);
});

it("Renders Pagination Button correctly", () => {
  const next = "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20";
  const previous = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
  const { getByTestId } = render(
    <Pagination gotoNextPage={next} gotoPrevPage={previous}></Pagination>
  );
  expect(getByTestId("gotoPreviousButton")).toHaveTextContent("Previous");
  expect(getByTestId("gotoNextButton")).toHaveTextContent("Next");
});

it("Pagination Button Matches Snapshot", () => {
  const next = "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20";
  const previous = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
  const tree = renderer
    .create(
      <Pagination gotoNextPage={next} gotoPrevPage={previous}></Pagination>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
