import Task from './Task';

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Mon Dec 26 2022 16:25:47
 * Copyright (c) 2022
 */

const Tasks = ({ tasks }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task key={task.id} task={task} />
			))}
		</>
	);
};

export default Tasks;
