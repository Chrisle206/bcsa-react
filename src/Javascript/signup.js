//TODO: update baseurl on deploy

import React, { useState } from 'react';

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
}

export { Signup };