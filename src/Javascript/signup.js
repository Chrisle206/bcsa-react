// import React, { useState } from 'react';

// const signupHandler = async function(e) {
//     e.preventDefault();

//   //Logic
//   // const [token, setToken] = useState("");

//   // //State for handling a user's data
//   // const [userData, setUserData] = useState({
//   //   username:"",
//   //   id:0,
//   //   characters: []
//   // });

//   // //State for handling form submissions
//   // const [formState, setFormState] = useState({
//   //     username:'',
//   //     password:''
//   // });
  
//       const baseurl = 'https://bcsa-api.herokuapp.com'
    
//       const response = await fetch(`${baseurl}/user/signup`, {
//         method: 'POST',
//         body: JSON.stringify(formState),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       const newUser = await response.json();
//       console.log(newUser);

//       setToken(newUser.token);
//       localStorage.setItem("token", newUser.token);
//       setUserData({
//           username:newUser.username,
//           id:newUser._id,
//         })
// };

// export { signupHandler };