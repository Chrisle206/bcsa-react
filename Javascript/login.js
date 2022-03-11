import React, { useState } from 'react';

function Login() {
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
}

export {Login};