const getEnemy = async ()=>{
    const token = localStorage.getItem("token");
    //Replace 'null' with whatever is grabbing the input for the request
    const enemyId = null;
  
    const response = await fetch(`https://bcsa-api.herokuapp.com/api/enemy/${enemyId}`, {
        method: "GET",
        headers: {
          "Content-Type":"application/json",
          "authorization":`Bearer ${token}`
        }
    })
    try {
        const data = await response.json();
        console.log(data);
        const { enemyName, attacks, def, dialogue, hp, level, idles, atk, taunts } = data
        setcharData({
            atk,
            attacks,
            enemyName,
            def,
            dialogue,
            hp,
            idles,
            image,
            level,
            taunts
        });
        return data;
  
    } catch (err) {
        console.log('Catch triggered')
        console.log(err);
    }
  };
  
  export default getEnemy;