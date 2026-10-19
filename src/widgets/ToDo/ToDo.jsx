import { useContext } from "react";

import AddTaskForm from "@/features/add-task";
import SearchTaskForm from "@/features/search-task";
import ToDoInfo from "@/features/stats";
import { ToDoList } from "@/entities/toDo";
import Button from "@/shared/ui/Button";
import { TasksContext } from "@/entities/toDo";

import styles from './ToDo.module.scss';

const ToDo = () => {
	const { firstIsNotDoneTaskRef } = useContext(TasksContext);

	return (
		<div className={styles.toDo}>
			<h1 className={styles.title}>Список тасок</h1>
			<AddTaskForm styles={styles} />
			<SearchTaskForm styles={styles} />
			<ToDoInfo styles={styles} />
			<Button
				onClick={() => {
					firstIsNotDoneTaskRef.current?.scrollIntoView({ behavior: 'smooth' })
				}}
			>
				Показать первую невыполненную таску
			</Button>
			<ToDoList styles={styles} />
		</div>
	)
}

export default ToDo;
