import React, { useState } from 'react';

//TODO: Signup page should be converted into a component at some point. It's a page for now for simplicity's sake

function Login( token, setToken, userData, setUserData ) {
    //Logic
    const [formState, setFormState] = useState({
        username:'',
        password:''
    });
    
    const loginHandler = async function(e) {
        e.preventDefault();
        const baseurl = 'localhost:3001'
      
        const response = await fetch(`${baseurl}/user/login`, {
          method: 'POST',
          body: JSON.stringify(formState),
          headers: { 'Content-Type': 'application/json' },
        });
    
        const user = await response.json();
        console.log(user);

        setToken(user.token);
        localStorage.setItem("token", user.token);
        setUserData({
            username:user.username,
            id:user._id,
            characters:user.characters,
          })
    };
    
    //Form, needs CSS
    return (
        <form onSubmit={loginHandler}>
            <input name="username" value={formState.username} onChange={e => setFormState({ ...formState, username: e.target.value })} />
            <input name="password" type="password" value={formState.password} onChange={e => setFormState({ ...formState, password: e.target.value })} />
            <button>Login</button>
        </form>
    );
}

export default Login;