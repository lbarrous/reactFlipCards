import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./index";
import { Provider } from "react-redux";
import store from "../../Store";

it("Shows the Modal", () => {
  render(
    <Provider store={store}>
      <Modal children={"Testing"} handleClose={jest.fn()} isOpen={true}/>
    </Provider>
  );
  expect(screen.getByText("Testing")).toBeInTheDocument();
});