import React, { useState } from 'react'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import assassin from '../assets/images/characters/assassin.png'
import warrior from '../assets/images/characters/warrior.png'
import ranger from '../assets/images/characters/ranger.png'
import routeMaster from '../assets/images/characters/routeMaster.png'

export default function Creation() {

    //TODO: Allow user to set a name for their character
    //TODO: New characters start with 5000 currency for testing purposes, change later
    const characters = [assassin, routeMaster, ranger, warrior]

    const character = characters[Math.floor(Math.random()*characters.length)]

    let assassinCount = 0;
    let masterCount = 0;
    let rangerCount = 0;
    let warriorCount = 0;

    const questions = [
        {
            id: 0,
            question: `When you code, what's your strategy?`,
            answers: [
                { answer: 'Code quick, then debug after.', relation: 'assassin' },
                { answer: `Slow and steady, saving myself time on debugging.`, relation: 'master' },
                { answer: 'One-line functions all day baby!', relation: 'ranger' },
                { answer: `Ctrl + C, Ctrl + V`, relation: 'warrior' }
            ]
        },
        {
            id: 1,
            question: `What's your preferred coding environment?`,
            answers: [
                { answer: `A cool, quiet cafe.`, relation: 'assassin' },
                { answer: `Somewhere chatty with lots of people to talk to.`, relation: 'master' },
                { answer: `My room, swaddled in a blanket`, relation: 'ranger' },
                { answer: `Whenever I can. Wherever I can.`, relation: 'warrior' }
            ]
        },
        {
            id: 2,
            question: `You've fallen into a coding rut! What do you do?`,
            answers: [
                { answer: `Cry. Endlessly.`, relation: 'assassin' },
                { answer: `Ask my peers for help.`, relation: 'master' },
                { answer: `Look to StackOverflow for insight.`, relation: 'ranger' },                 
                { answer: `Stare at the screen until it does something new.`, relation: 'warrior' }
            ],
        },
        {
            id: 3,
            question: `You've been tasked with a difficult full-stack assignment. Where do you begin?`,
            answers: [
                { answer: 'Front-end', relation: 'assassin' },
                { answer: 'Back-end', relation: 'master' },
                { answer: 'Layout some basic logic', relation: 'ranger' },
                { answer: 'Pseudo-code', relation: 'warrior' }
            ],
        },
        {
            id: 4,
            question: `What's your favorite aspect about coding?`,
            answers: [
                { answer: 'CSS', relation: 'assassin' },
                { answer: 'Servers', relation: 'master' },
                { answer: 'Javascript', relation: 'ranger' },
                { answer: 'Peacocking', relation: 'warrior' }
            ],
        }
    ]

    const [currentIndex, setIndex] = useState(0)

    const [showChar, setChar] = useState(false)

    const [charData, setcharData] = useState({
        characterName:"",
      });
  

    //Assemble inputs and decide class and base stats here
    //TODO: Base stats are not being set 
    const selectClass = () => {
        let quizResult;

        switch (true) {
            case (assassinCount > masterCount && rangerCount && warriorCount):
                quizResult = "CSS Assassin"
                setcharData({
                    atk: 105,
                    characterName: "CSS Assassin",
                    characterClass: "CSS Assassin",
                    currency:5000,
                    def:15,
                    exp:0,
                    hp:80,
                    items:[],
                    level:1,
                    image: assassin
                });        
                break;
                
            case (masterCount > assassinCount && rangerCount && warriorCount):
                quizResult = "Route Master"
                setcharData({
                    atk: 40,
                    characterName: "Route Master",
                    characterClass: "Route Master",
                    currency:5000,
                    def:30,
                    exp:0,
                    hp:120,
                    items:[],
                    level:1,
                    image: routeMaster
                });        
                break;

            case (rangerCount > assassinCount && masterCount && warriorCount):
                quizResult = "React Ranger"
                setcharData({
                    atk: 60,
                    characterName: "React Ranger",
                    characterClass: "React Ranger",
                    currency:5000,
                    def:40,
                    exp:0,
                    hp:100,
                    items:[],
                    level:1,
                    image: ranger
                });        
                break;

            case (warriorCount > assassinCount && masterCount && rangerCount):
                quizResult = "Keyboard Warrior"
                setcharData({
                    atk: 60,
                    characterName: "Keyboard Warrior",
                    characterClass: "Keyboard Warrior",
                    currency:5000,
                    def:30,
                    exp:0,
                    hp:110,
                    items:[],
                    level:1,
                    image: warrior
                });        
                break;

            default:
                console.log("Default case reached, class will be selected randomly");
                quizResult = character
                break;
        }

        return quizResult;
    }

    // const createCharacter = async (data) => {
    //     const token = localStorage.getItem("token");
    //     const userId = "WORK IN PROGRESS CHANGE LATER"

    //     const response = await fetch(`https://bcsa-api.herokuapp.com/user/newchar/${userId}`, {
    //         method: "POST",
    //         body: JSON.stringify(charData),
    //         headers: {
    //           "Content-Type":"application/json",
    //           "authorization":`Bearer ${token}`
    //         }
    //     })

    // }

    const answerClick = (relation) =>{

        if(relation === 'assassin'){
            assassinCount = assassinCount++
            console.log(assassinCount);
            alert('this button is related to assassin')
        } else if(relation === 'master'){
            masterCount = masterCount++
            console.log(masterCount);
            alert('this button is related to master')
        } else if(relation === 'ranger') {
            rangerCount = rangerCount++
            console.log(rangerCount);
            alert('this button is related to ranger')
        } else if(relation === 'warrior'){
            warriorCount = warriorCount++
            console.log(warriorCount);
            alert('this button is related to warrior')
        }

/*         const classChoice = [

        ] */

        const nextQuestion = currentIndex + 1
        if(nextQuestion < questions.length) {
        setIndex(nextQuestion)
        } else {
            const data = selectClass();
            //Evaluate state to see if data will match body necessary for POST request.
            // setcharData(data);
            //Uncomment this function once data is confirmed to be formatted properly.
            // createCharacter(data);
            setChar(true)
        }
    }

    const darkChar = {
        filter: 'brightness(0%)'
    }

    const firstRow = questions[currentIndex].answers.slice(2)
    const secondRow = questions[currentIndex].answers.slice(0,2)
    console.log(firstRow, secondRow)
        
    return (
        <div className="pageContainer creationBg">
        <div className="creationContainer">
        <div className="topNavContainer">
                    <button className="backbutton"><img className='backbuttonimg'src={back} alt="Back_Button" /> Back</button>                    
                </div>
        <div className="bgContainer">
        <h1 className="creationTitle">Create your character!</h1>
            {showChar ? (
                <img className="characterEmpty" src={character} alt="Empty_character"/>  
            ) : (
                <>
                    <img className="characterEmpty" style={darkChar} src={character} alt="select_character"></img>
                </>
            )}
        <div className="choicesContainer pixel-border">
            {showChar ? (
                <div className="question">Your character is *enter char here*</div>
            ) : (
                <>
                    <p className="question">{questions[currentIndex].question}</p>
                    <div className="attackList">
                                <div className="attackRow1">
                                    {firstRow.map((answer) => 
                                        <button className="attack" onClick={() => answerClick(answer.relation)} key={answer.answer.toString()}>{answer.answer}</button>
                                    )}
                                </div>
                                <div className="attackRow2">
                                    {secondRow.map((answer) => 
                                        <button className="attack" onClick={() => answerClick(answer.relation)} key={answer.answer.toString()}>{answer.answer}</button>
                                    )}
                                </div>
                    </div>
                </>
            )}
        </div>
        </div>
        <div className="bottomNavContainer">
                    <button className="backbutton"><img className='soundbuttonimg'src={speakeron} alt="speaker" /></button>                    
                </div>
         </div>
        </div>
    )
};