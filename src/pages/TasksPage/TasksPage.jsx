import { TasksProvider } from "@/entities/toDo";
import ToDo from "@/widgets/ToDo";

const TasksPage = () => {
	return (
		<TasksProvider>
			<ToDo />
		</TasksProvider>
	)
}

export default TasksPage;
