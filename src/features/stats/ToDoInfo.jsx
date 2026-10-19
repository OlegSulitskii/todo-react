import { memo, useContext, useMemo } from "react";
import { TasksContext } from "@/entities/toDo";


const ToDoInfo = (props) => {
	const { styles } = props;

	const {
		tasks,
		deleteAllTasks,
	} = useContext(TasksContext)

	const total = tasks.length;
	const hasTasks = total > 0;
	const done = useMemo(() => {
		return tasks.filter(({isDone}) => isDone).length;
	}, [tasks]);

	return (
		<div className={styles.info}>
			<div className={styles.totalTasks}>
				Готово {done} из {total}
			</div>
			{hasTasks && (
				<button
					className={styles.deleteAllButton}
					type="button"
					onClick={deleteAllTasks}
				>
					Удалить все таски
				</button>
			)}
		</div>
	)
}

export default memo(ToDoInfo);
