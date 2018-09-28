import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div>
            Second page!
            <Link to="/">Home page</Link>
        </div>

    );
};