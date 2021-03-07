export const getTodos = () => {
    if (typeof window !== "undefined") {
        return JSON.parse(window.localStorage.getItem("todos") ?? "[]");
    }
    return [];
};
export const storeTodos = (todos) => {
    if (typeof window !== "undefined") {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
};
