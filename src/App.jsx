/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Mon Dec 26 2022 14:42:57
 * Copyright (c) 2022
 */

const App = () => {
	const name = 'Stu';
	const x = true;

	return (
		<div className="container">
			<h1>Hello {x ? `${name}` : 'user'}</h1>
		</div>
	);
};

export default App;
