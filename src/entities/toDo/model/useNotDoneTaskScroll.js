import { useRef } from "react";

const useNotDoneTaskScroll = (tasks) => {
	const firstIsNotDoneTaskRef = useRef(null);
	const firstIsNotDoneTaskId = tasks.find(({ isDone }) => !isDone)?.id;

	return {
		firstIsNotDoneTaskRef,
		firstIsNotDoneTaskId,
	}
}

export default useNotDoneTaskScroll;
