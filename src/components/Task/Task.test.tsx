import { screen } from "@testing-library/dom";
import { fireEvent } from "@testing-library/dom";
import { beforeEach } from "vitest";

import { renderWithProviders } from "../../utils/test-utils";
import Task from "./Task";
import type { Todo } from "../../types/appTypes.types";

let task: Todo;

beforeEach(() => {
  task = {
    name: "new task",
    date: "25.07.2024",
    isDone: false,
    id: "1",
  };
});

describe("Task component should", () => {
  test("render correctly", () => {
    renderWithProviders(<Task task={task} />);

    const taskNameElement = screen.getByRole("heading", {
      level: 6,
      name: /new task/i,
    });
    const finishButton = screen.getByTestId("finishButton");
    const deleteButton = screen.getByTestId("deleteButton");

    expect(taskNameElement).toBeInTheDocument();
    expect(finishButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  test("call handleCompleteClick once on CheckBoxIcon button click", () => {
    renderWithProviders(<Task task={task} />);

    const finishButton = screen.getByTestId("finishButton");
    expect(finishButton).toBeInTheDocument();
    const taskNameElement = screen.getByRole("heading", {
      level: 6,
      name: /new task/i,
    });

    expect(taskNameElement).not.toHaveStyle("text-decoration: line-through");
  });

  test("call handleDeleteClick one on DeleteOutlineIcon button click", () => {
    renderWithProviders(<Task task={task} />);

    const deleteButton = screen.getByTestId("deleteButton");
    fireEvent.click(deleteButton);
  });
});
