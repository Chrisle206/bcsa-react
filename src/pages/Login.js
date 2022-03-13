import React, { useState } from 'react';
// import getCharacter from '../Javascript/getCharacter';

//TODO: Login page should be converted into a component at some point. It's a page for now for simplicity's sake

function Login() {
    //Logic
    const [token, setToken] = useState("");

    //State for handling a user's data
    const [userData, setUserData] = useState({
      username:"",
      id:0,
      characters: []
    });

    //State for handling a user's character's data
    const [charData, setcharData] = useState({
      characterName:"",
    });
  
    //State for handling form submissions
    const [formState, setFormState] = useState({
        username:'',
        password:''
    });
    
    const loginHandler = async function(e) {
        e.preventDefault();
        const baseurl = 'https://bcsa-api.herokuapp.com'
      
        const response = await fetch(`${baseurl}/user/login`, {
          method: 'POST',
          body: JSON.stringify(formState),
          headers: { 'Content-Type': 'application/json' },
        });
    
        const user = await response.json();
        // console.log(`This is a console.log of the userData state: ${userData}`);
        console.log(user);

        setToken(user.token);
        localStorage.setItem("token", user.token);
        localStorage.setItem("characterId", user.characters[0]._id);
        setUserData({
            username:user.username,
            id:user._id,
            characters:user.characters,
          });

    };

    //Logout entails deletion of JWT and character ID from local storage. Without token, there will be no userData.username state. Use this state to create conditional rendering on pages where login/signup/logout buttons should be hidden/shown.
    const logout = e=>{
        localStorage.removeItem("token");
        localStorage.removeItem("characterId");
        setToken("");
        setUserData({
          username:"",
          id:0,
          characters:[]
        })
    };

    //Function for retrieving character data. This is just here for demonstration and should be copied and pasted where it is needed.
    const getCharacter = async ()=>{
        const token = localStorage.getItem("token");
        const characterId = localStorage.getItem("characterId");
      
        const response = await fetch(`https://bcsa-api.herokuapp.com/user/char/${characterId}`, {
            method: "GET",
            headers: {
              "Content-Type":"application/json",
              "authorization":`Bearer ${token}`
            }
        })
        try {
            const data = await response.json();
            console.log(data);
            //TODO: Add 'class' field
            const { characterName, characterClass, currency, def, exp, hp, level, items, atk } = data
            setcharData({
                atk,
                characterName,
                characterClass,
                currency,
                def,
                exp,
                hp,
                items,
                level,
            });

        } catch (err) {
            console.log('Catch triggered')
            console.log(err);
        }
    };


    //Form
    return (
        <>
            <h2>This page is for demonstration of functionality only. Logic should be copied and pasted where necessary.</h2>
            <form onSubmit={loginHandler}>
                <input name="username" value={formState.username} onChange={e => setFormState({ ...formState, username: e.target.value })} />
                <input name="password" type="password" value={formState.password} onChange={e => setFormState({ ...formState, password: e.target.value })} />
                <button>Login</button>
            </form>
            {userData.username ? (
                <>
                    <h3>Welcome, {userData.username}</h3>
                    <h4>You have {userData.characters.length} character:</h4>
                    <button onClick={getCharacter}>Show Character</button>
                    {charData.characterName ? (
                        <div>
                            <p>Name: {charData.characterName}</p>
                            <p>Level: {charData.level}</p>
                            <p>Currency: {charData.currency}</p>
                            <p>atk: {charData.atk}</p>
                            <p>hp: {charData.hp}</p>
                            <p>def: {charData.def}</p>
                            <p>items: {charData.items}</p>
                        </div>

                    ) : (<h3>This user has no characters.</h3>)}
                    <button onClick={logout}>Logout</button>
                </>
            ) : null}
        </>
    );
}

export default Login;