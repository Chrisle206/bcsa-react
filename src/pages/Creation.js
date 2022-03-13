import React, { useState, useRef } from 'react'
import track from '../assets/sounds/creation.wav'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from  '../assets/images/speaker-off.png'
import assassin from '../assets/images/characters/assassin.png'
import warrior from '../assets/images/characters/warrior.png'
import ranger from '../assets/images/characters/ranger.png'
import master from '../assets/images/characters/routeMaster.png'

const mongoose = require('mongoose')

const schema = new mongoose.Schema({ name: 'string', size: 'string' })
const Character = mongoose.model('character', schema)

let choice
let chosenChar

let values = [
    {id: 'assassin', val: 0},
    {id: 'master', val: 0},
    {id: 'ranger', val: 0},
    {id: 'warrior', val: 0}
]

export default function Creation() {

    //TODO: Allow user to set a name for their character
    //TODO: New characters start with 5000 currency for testing purposes, change later
    const characters = [assassin, master, ranger, warrior]

    const character = characters[Math.floor(Math.random()*characters.length)]

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

    const [speaker, setStatus] = useState(false)
    const audioRef = useRef()

    function volOff() {
        if (useState !== false) {
            audioRef.current.pause()
            console.log('muting')
            setStatus(true)
        }
    }

    function volOn() {
        if (useState !== true) {
            audioRef.current.play()
            console.log('unmuting')
            setStatus(false)
        }
    }

    const [currentIndex, setIndex] = useState(0)


    const [showChar, setChar] = useState(false)

    let 
    [assRel, setAssRel] = useState(0),
    [masRel, setMasRel] = useState(0),
    [ranRel, setRanRel] = useState(0),
    [warRel, setWarRel] = useState(0)
    
    const answerClick = (relation) =>{

        if (relation === 'assassin') {
            const plusOne = assRel + 1
            setAssRel(plusOne)

            for (const val of values) {
                if (val.id === 'assassin') {
                    val.val = plusOne

                    break
                }
            }


        } else if (relation === 'master') {
            const plusOne = masRel + 1
            setMasRel(plusOne)

            for (const val of values) {
                if (val.id === 'master') {
                    val.val = plusOne

                    break
                }
            }

        } else if (relation === 'ranger') {
            const plusOne = ranRel + 1
            setRanRel(plusOne)

            for (const val of values) {
                if (val.id === 'ranger') {
                    val.val = plusOne

                    break
                }
            }

        } else if (relation === 'warrior') {
            const plusOne = warRel + 1
            setWarRel(plusOne)

            for (const val of values) {
                if (val.id === 'warrior') {
                    val.val = plusOne

                    break
                }
            }

        }
        
        function check() {

            const vals = []
            values.forEach((val) => {
                
                vals.push(val.val)
            })
            const max = Math.max(...vals)
            
            values.forEach((val) => {
                if (max !== val.val) {
                    return
                } else {
                    choice = val.id
                }
            })

            if (choice === 'assassin') {
                chosenChar = characters[0]
            } else if (choice === 'master') {
                chosenChar = characters[1]
            } else if (choice === 'ranger') {
                chosenChar = characters[2]
            } else if (choice === 'warrior') {
                chosenChar = characters[3]
            }

            //Assign state here?
            console.log(chosenChar)
            console.log(choice)

            
        }

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
            check()
        }
    }

    const darkChar = {
        filter: 'brightness(0%)'
    }

    const firstRow = questions[currentIndex].answers.slice(2)
    const secondRow = questions[currentIndex].answers.slice(0,2)
        
    return (
        <div className="pageContainer creationBg">
        <div className="creationContainer">
        <div className="topNavContainer">
                    <button className="backbutton"><img className='backbuttonimg'src={back} alt="Back_Button" /> Back</button>                    
                </div>
        <div className="bgContainer">
        <h1 className="creationTitle">Create your character!</h1>
            {showChar ? (
                <img className="characterEmpty" src={chosenChar} alt="Empty_character"/>  
            ) : (
                <>
                    <img className="characterEmpty" style={darkChar} src={character} alt="select_character"></img>
                </>
            )}
        <div className="choicesContainer pixel-border">
            {showChar ? (
                <div className="question">Your character is {choice}</div>
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
            <>
                <audio autoPlay loop ref={audioRef} src={track}/>
                    {speaker ? (
                            <button onClick={volOn} className="backbutton"><img className='soundbuttonimg'src={speakeroff} alt="speaker" /></button>                    
                        ) : (
                            <>
                            <button onClick={volOff} className="backbutton"><img className='soundbuttonimg'src={speakeron} alt="speaker" /></button> 
                            </>
                    )}                   
            </>
                </div>
         </div>
        </div>
    )
}