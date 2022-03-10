import React, { useState } from 'react'
import assassin from '../assets/images/characters/assassin.png'
import warrior from '../assets/images/characters/warrior.png'
import ranger from '../assets/images/characters/ranger.png'
import routeMaster from '../assets/images/characters/routeMaster.png'

export default function Creation() {

    const characters = [assassin, routeMaster, ranger, warrior]

    const character = characters[Math.floor(Math.random()*characters.length)]

    const questions = [
        {
            id: 0,
            question: `When you code, what's your strategy`,
            answers: [
                { answer: 'Code quick, then debug after.', relation: 'assassin' },
                { answer: `Slow and steady, saving myself time on debugging.`, relation: 'master' },
                { answer: 'One-line functions all day baby!', relation: 'ranger' },
                { answer: `Ctrl + C, Ctrl + V`, relation: 'warrior' }
            ]
        },
        {
            id: 1,
            question: `What's your preferred coding environment`,
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
        }
    ]

    const [currentIndex, setIndex] = useState(0)

    const [showChar, setChar] = useState(false)

    const answerClick = (relation) =>{

        if(relation === 'assassin'){
            alert('this button is related to assassin')
        } else if(relation === 'master'){
            alert('this button is related to master')
        } else if(relation === 'ranger') {
            alert('this button is related to ranger')
        } else if(relation === 'warrior'){
            alert('this button is related to warrior')
        }

/*         const classChoice = [

        ] */

        const nextQuestion = currentIndex + 1
        if(nextQuestion < questions.length) {
        setIndex(nextQuestion)
        } else {
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
                    {/* Let's not use buttons to keep the style cool. We can use links and a tags instead. */}
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
         </div>
        </div>
    )
}