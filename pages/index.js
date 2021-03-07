import Head from "next/head";
import styles from "../styles/Home.module.css";
import TodoList from "../component/TodoList";

export default function Home({ storedTodos }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Todo list</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <TodoList />
            </main>
            <footer className={styles.footer}>
                <p className={styles.description}>This project uses next.js, heroku, circle.ci, webhook and unit testing</p>
            </footer>
        </div>
    );
}
