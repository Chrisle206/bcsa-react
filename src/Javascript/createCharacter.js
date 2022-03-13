const createCharacter = async (data) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("id");

    //setcharData should be used to set the body for the request, wherever this function is being pasted
    const [charData, setcharData] = useState({
        characterName:"",
      });
  
    const response = await fetch(`https://bcsa-api.herokuapp.com/user/newchar/${userId}`, {
        method: "POST",
        body: JSON.stringify(charData),
        headers: {
          "Content-Type":"application/json",
          "authorization":`Bearer ${token}`
        }
    })

}