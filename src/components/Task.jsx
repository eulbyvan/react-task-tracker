import { FaTimes } from 'react-icons/fa';

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Mon Dec 26 2022 17:05:15
 * Copyright (c) 2022
 */

const Task = ({ task }) => {
	return (
		<div className="task">
			<h3>
				{task.text}{' '}
				<FaTimes style={{ color: 'red', cursor: 'pointer' }} />
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

export default Task;
