// import React, { useState } from 'react';

// const loginHandler = async function(e) {
//     e.preventDefault();

//   //Logic
//   // const [token, setToken] = useState("");

//   // //State for handling a user's data
//   // const [userData, setUserData] = useState({
//   //   username:"",
//   //   id:0,
//   //   characters: []
//   // });

//   // //State for handling a user's character's data
//   // const [charData, setcharData] = useState({
//   //   characterName:"",
//   // });

//   // //State for handling form submissions
//   // const [formState, setFormState] = useState({
//   //     username:'',
//   //     password:''
//   // });
  
//       const baseurl = 'https://bcsa-api.herokuapp.com'
    
//       const response = await fetch(`${baseurl}/user/login`, {
//         method: 'POST',
//         body: JSON.stringify(formState),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       const user = await response.json();
//       console.log(user);

//       setToken(user.token);
//       localStorage.setItem("token", user.token);
//       localStorage.setItem("characterId", user.characters[0]._id);
//       setUserData({
//           username:user.username,
//           id:user._id,
//           characters:user.characters,
//         });

// };

// export { loginHandler };