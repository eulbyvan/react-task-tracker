/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Mon Dec 26 2022 16:25:47
 * Copyright (c) 2022
 */

const Tasks = ({ tasks }) => {
	return (
		<>
			{tasks.map((task) => (
				<h3 key={task.id}>{task.text}</h3>
			))}
		</>
	);
};

export default Tasks;
