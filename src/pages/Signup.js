import React, { useState } from 'react';

//TODO: Signup page should be converted into a component at some point. It's a page for now for simplicity's sake

function Signup() {
    //Logic
    const [token, setToken] = useState("");
    const [userData, setUserData] = useState({
      username:"",
      id:0,
      characters: []
    });
  
    const [formState, setFormState] = useState({
        username:'',
        password:''
    });
    
    const signupHandler = async function(e) {
        e.preventDefault();
        const baseurl = 'http://localhost:3001'
      
        const response = await fetch(`${baseurl}/user/signup`, {
          method: 'POST',
          body: JSON.stringify(formState),
          headers: { 'Content-Type': 'application/json' },
        });
    
        const newUser = await response.json();
        console.log(newUser);

        setToken(newUser.token);
        localStorage.setItem("token", newUser.token);
        setUserData({
            username:newUser.username,
            id:newUser._id,
          })
    };
    
    //Form, needs CSS
    return (
        <>
        <form onSubmit={signupHandler}>
            <input name="username" value={formState.username} onChange={e => setFormState({ ...formState, username: e.target.value })} />
            <input name="password" type="password" value={formState.password} onChange={e => setFormState({ ...formState, password: e.target.value })} />
            <button>SignUp</button>
        </form>
        {userData.username ? (
                <>
                    <h3>Welcome, {userData.username}</h3>
                    <button onClick={logout}>Logout</button>
                </>
            ) : null}
        </>
    );
}

export default Signup;