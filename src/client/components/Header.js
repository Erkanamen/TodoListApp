import React from 'react';
import { Link } from 'react-router';

//This is menuItem variable.
//This const variable will be used for navigator of hearder
const MenuItem = ({active, children, to}) => (
    <Link to={to}>
    	{children}
    </Link>
);

const Header = () => {
    return (
        <div>
            <div>
                <h1>Tutorial 7</h1>
            </div>
            <div>
            	<h2>Menu</h2>
					<ui>
						<li><MenuItem to={'/intro'}>Intro</MenuItem></li>
                		<li><MenuItem to={'/todolist'}>TodoApp</MenuItem></li>
                		<li><MenuItem to={'/questions/0'}>Questions</MenuItem></li>
                		<br />
                	</ui>
            </div>
        </div>
    );
};

export default Header;