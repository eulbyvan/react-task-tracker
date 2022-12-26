/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Mon Dec 26 2022 22:25:33
 * Copyright (c) 2022
 */

const AddTask = () => {
	return (
		<form className="add-form">
			<div className="form-control">
				<label>Task</label>
				<input type="text" placeholder="Add Task" />
			</div>
			<div className="form-control">
				<label>Day & Time</label>
				<input type="text" placeholder="Add Day & Time" />
			</div>
			<div className="form-control form-control-check">
				<label>Set Reminder</label>
				<input type="checkbox" />
			</div>
			<input type="submit" value="Save Task" className="btn btn-block" />
		</form>
	);
};

export default AddTask;
