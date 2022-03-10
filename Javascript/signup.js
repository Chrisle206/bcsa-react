//TODO: update baseurl on deploy

const signupHandler = async function(e) {
    e.preventDefault();
    const baseurl = 'localhost:3001'
  
    const response = await fetch(`${baseurl}/user/signup`, {
      method: 'POST',
      body: JSON.stringify(formState),
      headers: { 'Content-Type': 'application/json' },
    });

    const newUser = await response.json();
    console.log(newUser);

  
}

const signupBtn = document.getElementById("signupBtn");
