import { useContext, useState } from "react";

import { TasksContext } from "@/entities/toDo";
import Field from "@/shared/ui/Field";
import Button from "@/shared/ui/Button";

const AddTaskForm = (props) => {
	const { styles } = props;

	const [newTaskTitle, setNewTaskTitle] = useState('');

	const {
		addTask,
		newTaskInputRef,
	} = useContext(TasksContext);

	const [error, setError] = useState('');

	const clearNewTaskTitle = newTaskTitle.trim();
	const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0;

	const onSubmit = (event) => {
		event.preventDefault();

		if (!isNewTaskTitleEmpty) {
			addTask(
				clearNewTaskTitle,
				() => setNewTaskTitle('')
			);
		}
	};

	const onInput = (event) => {
		const { value } = event.target;
		const clearValue = value.trim();
		const hasOnlySpaces = value.length > 0 && clearValue.length === 0;

		setNewTaskTitle(value);
		setError(hasOnlySpaces ? 'Таска не может быть пустой' : '');
	};

	return (
		<form
			className={styles.form}
			onSubmit={onSubmit}
		>
			<Field
				className={styles.field}
				label="Новая таска"
				id="new-task"
				type="text"
				value={newTaskTitle}
				error={error}
				onInput={onInput}
				ref={newTaskInputRef}
			/>
			<Button
				type="submit"
				isDisabled={isNewTaskTitleEmpty}
			>
				Добавить
			</Button>
		</form>
	)
}

export default AddTaskForm;
