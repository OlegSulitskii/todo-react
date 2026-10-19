import { createContext, useMemo } from "react";
import useTasks from "./useTasks";
import useNotDoneTaskScroll from "./useNotDoneTaskScroll";

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
	const { children } = props;

	const {
		tasks,
		filteredTasks,
		deleteTask,
		deleteAllTasks,
		toggleTaskComplete,
		searchQuery,
		setSearchQuery,
		newTaskInputRef,
		addTask,
		disappearingTaskId,
		appearingTaskId,
	} = useTasks();

	const {
		firstIsNotDoneTaskRef,
		firstIsNotDoneTaskId,
	} = useNotDoneTaskScroll(tasks);

	const value = useMemo(() => ({
		tasks,
		filteredTasks,
		deleteTask,
		deleteAllTasks,
		toggleTaskComplete,
		searchQuery,
		setSearchQuery,
		newTaskInputRef,
		addTask,
		disappearingTaskId,
		appearingTaskId,
		firstIsNotDoneTaskRef,
		firstIsNotDoneTaskId
	}), [
		tasks,
		filteredTasks,
		deleteTask,
		deleteAllTasks,
		toggleTaskComplete,
		searchQuery,
		setSearchQuery,
		newTaskInputRef,
		addTask,
		disappearingTaskId,
		appearingTaskId,
		firstIsNotDoneTaskRef,
		firstIsNotDoneTaskId
	]);

	return (
		<TasksContext.Provider
			value={value}
		>
			{children}
		</TasksContext.Provider>
	)
};
