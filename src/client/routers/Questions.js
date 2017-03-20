import React from 'react';
import { Link } from 'react-router';

const PostLinks = () => {
    return (
        <div>
        	<ui>
            	<li><Link to="/questions/10000">10000</Link></li>
            	<li><Link to="/questions/20000">20000</Link></li>
            	<li><Link to="/questions/30000">30000</Link></li>
            	<li><Link to="/questions/40000">40000</Link></li>
            </ui>
        </div>
    );
};

//Question component
//This component will have PostLinks to show you how the id can be change according to changes of URL
const Questions = ({params}) => {
    return (
        <div>
            <h1> How many questions are there? </h1>
            <h2> The number of questions = {params.id} </h2>
            <br />
    			<PostLinks />
        </div>
    );
};

export default Questions;