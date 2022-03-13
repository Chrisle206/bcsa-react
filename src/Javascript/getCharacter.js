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
      const { characterName, characterClass, currency, def, exp, hp, level, items, atk, image } = data
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
          image
      });
      return data;
  } catch (err) {
      console.log('Catch triggered')
      console.log(err);
  }
};

export default getCharacter;