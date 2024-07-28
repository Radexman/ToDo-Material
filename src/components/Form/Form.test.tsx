import { screen, fireEvent } from "@testing-library/dom";
import { renderWithProviders } from "../../utils/test-utils";
import Form from "./Form";

describe("Form component should", () => {
  test("render correctly", () => {
    renderWithProviders(<Form />);

    const headingElement = screen.getByRole("heading", {
      level: 2,
      name: /create tasks for today/i,
    });
    const taskNameInputElement = screen.getByPlaceholderText("Task Name");
    const taskDateInputElement = screen.getByPlaceholderText("date");
    const addTaskButtonElement = screen.getByRole("button", {
      name: /add task/i,
    });

    expect(headingElement).toBeInTheDocument();
    expect(taskNameInputElement).toBeInTheDocument();
    expect(taskDateInputElement).toBeInTheDocument();
    expect(addTaskButtonElement).toBeInTheDocument();
  });

  test("render disabled button if no input provided", () => {
    renderWithProviders(<Form />);

    const addTaskButtonElement = screen.getByRole("button", {
      name: /add task/i,
    });
    const taskNameInputElement = screen.getByPlaceholderText("Task Name");
    const taskDateInputElement = screen.getByPlaceholderText("date");

    fireEvent.change(taskNameInputElement, { target: { value: "" } });
    fireEvent.change(taskDateInputElement, { target: { value: "" } });

    expect(addTaskButtonElement).toBeDisabled();
  });

  test("render enabled button if input was provided", () => {
    renderWithProviders(<Form />);

    const addTaskButtonElement = screen.getByRole("button", {
      name: /add task/i,
    });
    const taskNameInputElement = screen.getByPlaceholderText("Task Name");
    const taskDateInputElement = screen.getByPlaceholderText("date");

    fireEvent.change(taskNameInputElement, { target: { value: "New Task" } });
    fireEvent.change(taskDateInputElement, { target: { value: "2024-07-28" } });

    expect(addTaskButtonElement).not.toBeDisabled();
  });
});
