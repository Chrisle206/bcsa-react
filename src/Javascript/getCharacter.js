const getCharacter = ()=>{
  const token = localStorage.getItem("token");
  const characterId = localStorage.getItem("characterId");

    fetch(`https://bcsa-api.herokuapp.com/user/char/${characterId}`, {
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        "authorization":`Bearer ${token}`
      }
    }).then(res => {
      res.json();
    }).then(charData => {
      console.log(charData);
    }) 
};

export default getCharacter;