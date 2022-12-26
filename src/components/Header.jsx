import PropTypes from 'prop-types';
import Button from './Button';

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Mon Dec 26 2022 14:50:12
 * Copyright (c) 2022
 */

const Header = ({ title }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button color="green" text="Add" />
		</header>
	);
};

Header.defaultProps = {
	title: 'Task Tracker',
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
// 	color: 'red',
// 	backgroundColor: 'black',
// };

export default Header;
