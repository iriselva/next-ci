import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { storeTodos, getTodos } from "../utils/localStoreUtils";

export default function TodoList() {
    const [todos, setTodos] = useState(getTodos());
    const [todo, setTodo] = useState("");

    useEffect(() => {
        storeTodos(todos);
    }, [todos]);

    const removeTodo = (todo) => {
        setTodos(todos.filter((t) => t !== todo));
    };

    const onChange = (e) => {
        setTodo(e.target.value);
    };

    return (
        <div>
            <h1 className={(styles.title, styles.card)}>Todo List</h1>
            <div className={styles.card}>
                <input data-testid="todoInput" value={todo} onChange={onChange} />
                <button data-testid="addButton" onClick={() => setTodos([...todos, todo])}>
                    Add
                </button>
            </div>
            <div className={styles.grid}>
                <div>
                    {todos.map((todo) => (
                        <div className={styles.card}>
                            <h2>{todo}</h2>
                            <button data-testid={`delete_${todo}`} onClick={() => removeTodo(todo)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
