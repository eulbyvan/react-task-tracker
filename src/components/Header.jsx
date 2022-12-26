/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Mon Dec 26 2022 14:50:12
 * Copyright (c) 2022
 */

const Header = ({ title }) => {
	return (
		<header>
			<h1>{title}</h1>
		</header>
	);
};

Header.defaultProps = {
	title: 'Task Tracker',
};

export default Header;
