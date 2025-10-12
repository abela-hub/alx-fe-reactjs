import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
    test("renders initial todos", () => {
        render(<TodoList />);
        const todos = screen.getAllByRole("listitem");
        expect(todos.length).toBe(2);
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    });

    test("adds a new todo", () => {
        render(<TodoList />);
        const input = screen.getByTestId("todo-input");
        const addButton = screen.getByTestId("add-button");

        fireEvent.change(input, { target: { value: "Test Todo" } });
        fireEvent.click(addButton);

        expect(screen.getByText("Test Todo")).toBeInTheDocument();
    });

    test("toggles todo completion", () => {
        render(<TodoList />);
        const todo = screen.getByText("Learn React");
        fireEvent.click(todo);
        expect(todo).toHaveStyle("text-decoration: line-through");
    });

    test("deletes a todo", () => {
        render(<TodoList />);
        const deleteButton = screen.getByTestId("delete-1");
        fireEvent.click(deleteButton);

        expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
    });
});
