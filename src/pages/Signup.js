import React, { useState } from 'react';

//TODO: Signup page should be converted into a component at some point. It's a page for now for simplicity's sake

function Signup() {
    //Logic
    const [token, setToken] = useState("");

    //State for handling a user's data
    const [userData, setUserData] = useState({
      username:"",
      id:0,
      characters: []
    });
  
    //State for handling form submissions
    const [formState, setFormState] = useState({
        username:'',
        password:''
    });
    
    const signupHandler = async function(e) {
        e.preventDefault();
        const baseurl = 'https://bcsa-api.herokuapp.com'
      
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

        //Logout entails deletion of JWT and character ID from local storage. Without token, there will be no userData.username state. Use this state to create conditional rendering on pages where login/signup/logout buttons should be hidden/shown.
    const logout = e=>{
        localStorage.removeItem("token");
        setToken("");
        setUserData({
          username:"",
          id:0,
          characters:[]
        })
    };
    
    //Form, needs CSS
    return (
        <>
            <h2>This page is for demonstration of functionality only. Logic should be copied and pasted where necessary.</h2>

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
};

export default Signup;