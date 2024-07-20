import { screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./utils/test-utils";

describe("App component should", () => {
  test("render correctly", () => {
    renderWithProviders(<App />);

    const headingElement = screen.getByRole("heading", {
      level: 1,
      name: /demo redux counter/i,
    });
    const counterElement = screen.getByRole("heading", {
      level: 2,
    });
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    const decrementButton = screen.getByRole("button", {
      name: /decrement/i,
    });
    const inputElement = screen.getByRole("spinbutton", {
      name: /input a number/i,
    });
    const addSubtractButton = screen.getByRole("button", {
      name: /add \/ subtract/i,
    });

    expect(headingElement).toBeInTheDocument();
    expect(counterElement).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(addSubtractButton).toBeInTheDocument();
  });

  test("increment counter value on 'INCREMENT' button click", () => {
    renderWithProviders(<App />);

    const counterElement = screen.getByRole("heading", {
      level: 2,
    });
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });

    expect(counterElement).toHaveTextContent("0");
    fireEvent.click(incrementButton);
    expect(counterElement).toHaveTextContent("1");
  });

  test("decrement counter value on 'DECREMENT' button click", () => {
    renderWithProviders(<App />);

    const counterElement = screen.getByRole("heading", {
      level: 2,
    });
    const decrementButton = screen.getByRole("button", {
      name: /decrement/i,
    });

    expect(counterElement).toHaveTextContent("0");
    fireEvent.click(decrementButton);
    expect(counterElement).toHaveTextContent("-1");
  });

  test("edit counter value on 'Add / Subtract' button click", () => {
    renderWithProviders(<App />);

    const counterElement = screen.getByRole("heading", {
      level: 2,
    });
    const inputElement = screen.getByRole("spinbutton", {
      name: /input a number/i,
    });
    const addSubtractButton = screen.getByRole("button", {
      name: /add \/ subtract/i,
    });

    // Test adding value if number is positive
    expect(counterElement).toHaveTextContent("0");
    fireEvent.change(inputElement, { target: { value: "5" } });
    fireEvent.click(addSubtractButton);
    expect(counterElement).toHaveTextContent("5");

    // Test subtracting value is number is negative
    fireEvent.change(inputElement, { target: { value: "-3" } });
    fireEvent.click(addSubtractButton);
    expect(counterElement).toHaveTextContent("2");
  });
});
