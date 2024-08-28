import React from 'react';
import Subscribe from './Subscribe';

const Protected = () => {

    const logOut = () => {
        sessionStorage.removeItem('token');
        window.location.reload();
    }
    return (
        <div>
            This is a Protected Route
            <button onClick={logOut}>Log Out!!!</button>

            <Subscribe/>
        </div>
    )
}

export default Protected;
