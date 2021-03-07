import TodoList from "../component/TodoList";
import { render, fireEvent } from "@testing-library/react";
import * as localStoreUtils from "../utils/localStoreUtils";
describe("TodoList", () => {
    beforeEach(() => {
        jest.spyOn(localStoreUtils, "getTodos").mockImplementation(() => ["Todo 1"]);
    });

    it("should render todo list with items from stored list", () => {
        const { getByText } = render(<TodoList />);

        expect(getByText("Todo 1")).toBeInTheDocument();
    });

    it("should add new todo list item on button click and store all todos", () => {
        const { getByTestId, getByText } = render(<TodoList />);
        const storeSpy = jest.spyOn(localStoreUtils, "storeTodos");

        const inputEl = getByTestId("todoInput");

        fireEvent.change(inputEl, { target: { value: "Todo 2" } });

        const addButton = getByTestId("addButton");

        fireEvent.click(addButton);

        expect(getByText("Todo 1")).toBeInTheDocument();
        expect(getByText("Todo 2")).toBeInTheDocument();
        expect(storeSpy).toBeCalledWith(["Todo 1", "Todo 2"]);
    });

    it("should delete todo list item on button click and store all todos", () => {
        const { getByTestId, queryByText } = render(<TodoList />);
        const storeSpy = jest.spyOn(localStoreUtils, "storeTodos");

        const deleteButton = getByTestId("delete_Todo 1");

        fireEvent.click(deleteButton);

        expect(queryByText("Todo 1")).not.toBeInTheDocument();
        expect(storeSpy).toBeCalledWith([]);
    });
});
