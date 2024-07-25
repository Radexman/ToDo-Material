import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../../utils/test-utils";
import Task from "./Task";
import type { Todo } from "../../types/appTypes.types";

describe("Task component should", () => {
  test("render correctly", () => {
    const task: Todo = {
      name: "new task",
      date: "25.07.2024",
      isDone: false,
      id: "1",
    };
    renderWithProviders(<Task task={task} />);

    const taskNameElement = screen.getByRole("heading", {
      level: 6,
      name: /new task/i,
    });

    expect(taskNameElement).toBeInTheDocument();
  });
});
