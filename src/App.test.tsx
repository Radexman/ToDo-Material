import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";
import App from "./App";

describe("App should", () => {
  test("add new todo element", async () => {
    renderWithProviders(<App />);

    const inputNameElement = screen.getByPlaceholderText("Task Name");
    expect(inputNameElement).toBeInTheDocument();

    fireEvent.change(inputNameElement, { target: { value: "Test Title" } });
    expect(inputNameElement).toHaveValue("Test Title");

    const inputDateElement = screen.getByPlaceholderText("date");
    expect(inputDateElement).toBeInTheDocument();

    fireEvent.change(inputDateElement, { target: { value: "2024-07-26" } });
    expect(inputDateElement).toHaveValue("2024-07-26");

    const addTaskButton = screen.getByRole("button", {
      name: /add task/i,
    });
    expect(addTaskButton).toBeInTheDocument();

    fireEvent.click(
      addTaskButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      }),
    );
  });
});
