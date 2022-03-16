//Logic for updating character's currency/exp upon victory, stats upon level up, and updating the react state to reflect those changes.
const editCharacter = async (sendToAPI)=>{

    const token = localStorage.getItem("token");
    const characterId = localStorage.getItem("characterId");

    //State for handling a user's character's data, used for saving stats in state for easy access


    //Character edits go here
    // var sendToAPI = {
    //     atk: null,
    //     characterName:null,
    //     characterClass:null,
    //     currency:null,
    //     def:null,
    //     exp:null,
    //     hp:null,
    //     items:null,
    //     level:null,
    //     image: null
    // };

    const response = await fetch(`https://bcsa-api.herokuapp.com/user/charupdate/${characterId}`, {
        method: "PUT",
        body: JSON.stringify(sendToAPI),
        headers: {
          "Content-Type":"application/json",
          "authorization":`Bearer ${token}`
        }
    });

    try {
        const data = await response.json();
        console.log(data);
        // const { characterName, characterClass, currency, def, exp, hp, level, items, atk, image } = data
        // setcharData({
        //     atk,
        //     characterName,
        //     characterClass,
        //     currency,
        //     def,
        //     exp,
        //     hp,
        //     items,
        //     level,
        //     image
        // });
        return data;
    } catch (err) {
        console.log('Catch triggered')
        console.log(err);
    }
};
  
export default editCharacter;