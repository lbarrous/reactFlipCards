import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./index";
import { Provider } from "react-redux";
import store from "../../Store";

it("Shows the card", () => {
  render(
    <Provider store={store}>
      <Card
        title="title"
        description="description"
        id="1"
        imgSrc="url"
        onEdit={jest.fn()}
      />
    </Provider>
  );
  expect(screen.getByText("title")).toBeInTheDocument();
  expect(screen.getByText("description")).toBeInTheDocument();
});
