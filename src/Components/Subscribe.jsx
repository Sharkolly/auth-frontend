import React, { useState } from 'react';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    
    const handlePost = async (e) => {
        // console.log(email);
        e.preventDefault();
        try {
            const fetchJson = await fetch('http://localhost:5000/signin', {
                method: 'POST',
                body: JSON.stringify(email),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const { token } = await fetchJson.json();
            console.log(token);
            // console.log('hello');
        }
        catch (err) {
            console.log(err.message);
        };
    };

    return (
        <div>
            Subscribe to our Newsletter
            <form onSubmit={(e) => handlePost(e)}>
                <input type="email" name='email' onChange={((e) => setEmail(e.target.value))} placeholder='Enter your email...' />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default Subscribe;
