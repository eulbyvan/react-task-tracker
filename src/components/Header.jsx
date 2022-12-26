import PropTypes from 'prop-types';

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

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
