import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "./index";
import { Provider } from "react-redux";
import store from "../../Store";

it("Shows the form", () => {
  render(
    <Provider store={store}>
      <Form onSubmit={jest.fn()} />
    </Provider>
  );
  expect(screen.getByText("Title")).toBeInTheDocument();
  expect(screen.getByText("Description")).toBeInTheDocument();
  expect(screen.getByText("Image URL")).toBeInTheDocument();
  expect(screen.getByText("Submit")).toBeInTheDocument();
});

it("Shows errors", () => {
  render(
    <Provider store={store}>
      <Form onSubmit={jest.fn()} />
    </Provider>
  );
  fireEvent.click(screen.getByText("Submit"));
  expect(screen.getByText("Title is required")).toBeInTheDocument();
  expect(screen.getByText("Description is required")).toBeInTheDocument();
});

it("Changes title text", () => {
  render(
    <Provider store={store}>
      <Form onSubmit={jest.fn()} />
    </Provider>
  );
  const titleInput = screen.getByLabelText("title");
  fireEvent.change(titleInput, { target: { value: "23" } });
  expect(titleInput.value).toBe("23");
});

it("Changes description text", () => {
  render(
    <Provider store={store}>
      <Form onSubmit={jest.fn()} />
    </Provider>
  );
  const descriptionInput = screen.getByLabelText("description");
  fireEvent.change(descriptionInput, { target: { value: "19" } });
  expect(descriptionInput.value).toBe("19");
});

it("Changes imgsrc text", () => {
    render(
      <Provider store={store}>
        <Form onSubmit={jest.fn()} />
      </Provider>
    );
    const imgSrcInput = screen.getByLabelText("imgSrc");
    fireEvent.change(imgSrcInput, { target: { value: "url" } });
    expect(imgSrcInput.value).toBe("url");
  });
