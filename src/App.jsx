import Header from './components/Header';

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Mon Dec 26 2022 14:42:57
 * Copyright (c) 2022
 */

const App = () => {
	return (
		<div className="container">
			<Header title={1} /> {/*it renders with prop type error*/}
		</div>
	);
};

export default App;
