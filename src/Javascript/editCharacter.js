const editCharacter = async ()=>{
    const token = localStorage.getItem("token");
    const characterId = localStorage.getItem("characterId");

    //State for handling a user's character's data
    const [charData, setcharData] = useState({
        characterName: "",
    });

    const response = await fetch(`https://bcsa-api.herokuapp.com/user/charupdate/${characterId}`, {
        method: "PUT",
        body: JSON.stringify(charData),
        headers: {
          "Content-Type":"application/json",
          "authorization":`Bearer ${token}`
        }
    });

    try {
        const data = await response.json();
        console.log(data);
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
  
  export default editCharacter;