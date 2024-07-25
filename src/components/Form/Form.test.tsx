import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../../utils/test-utils";
import Form from "./Form";

describe("Form component should", () => {
  test("render correctly", () => {
    renderWithProviders(<Form />);

    const headingElement = screen.getByRole("heading", {
      level: 2,
      name: /create tasks for today/i,
    });
    const taskNameInputElement = screen.getByTestId("taskName");
    const taskDateInputElement = screen.getByTestId("taskDate");
    const addTaskButtonElement = screen.getByRole("button", {
      name: /add task/i,
    });

    expect(headingElement).toBeInTheDocument();
    expect(taskNameInputElement).toBeInTheDocument();
    expect(taskDateInputElement).toBeInTheDocument();
    expect(addTaskButtonElement).toBeInTheDocument();
  });
});
