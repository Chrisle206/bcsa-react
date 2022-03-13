const getEnemy = async ()=>{
    const token = localStorage.getItem("token");
    //Replace 'null' with whatever is grabbing the input for the request. You can get enemy ID's by going to https://bcsa-api.herokuapp.com/api/enemies
    const enemyId = null;

        //State for handling an enemy's data, used for saving stats in state for easy access
        const [enemyData, setenemyData] = useState({
            enemyName: "",
        });
    
  
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
        const { enemyName, attacks, def, dialogue, hp, level, idles, atk, taunts, image } = data
        setenemyData({
            enemyName,
            attacks,
            def,
            dialogue,
            hp,
            level,
            idles,
            atk,
            taunts,
            image
        });
        return data;
  
    } catch (err) {
        console.log('Catch triggered')
        console.log(err);
    }
  };
  
  export default getEnemy;