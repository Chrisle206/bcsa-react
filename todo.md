# SKILL POINTS LOGIC

done [ ]

# level up

done [ ]

(horizontal scaling, exp is equal to enemy hp, generate skill points, +10hp, show on battle screen after victory)

# HEALTH BAR

done [ ]

needs to scale depending on hp value

# IF DONE

done [ ]

# dungeon mode

done [ ]

NEW TODOS:
LINE 186 start.js

put in creation of

    const [loading, isLoading] = useState(true)

        useEffect(() => {
        setTimeout(() => isLoading(false), 2000)
    }, [])

        return (
        <>
        {loading === false ? (
                <div className="pageContainer creationBg">
            <div className="MainBattleContainer">
            <div className="topNavContainer">
                    {/* TODO: When battle is over, display a continue button. During battle display escape option, which prompts user that battle will not have rewards.*/}
                    <Link to='/Tavern' style={{textDecoration: 'none', color: 'white'}} className="backbutton"><img className='backbuttonimg'src={back} alt="Back_Button" /> Back</Link>                    
                </div>
                <div className="battleContainer">
                    <div className="enemyRow">
                        <div className="StatBox pixel-border">
                            <div className='statRow'>
                                <h3>{enemy.name}</h3>
                                <h3>Lvl: {enemy.level}</h3>
                            </div>
                         
                                    <div className='healthcontainer'>
                                        <div className='healthBarEnemy'>

                                        </div>
                               
                                    <h3 className='hp'>HP:{enemyHp}/{enemy.hp}</h3>
                            </div>
                        </div>
                        <div className='effectcont'>
                            <img className="enemyPic" src={opponent} alt="Enemy" />
                        <img className="explosion explosion1" id='explosion' src={explosion} alt="explosion" />
                        </div>
                    </div>
                    <div className="heroRow">
                    <div className='effectcont'>
                        <img className="heroPic" src={character} alt="Hero" />
                        <img className="explosion explosion1" id='explosion2' src={explosion} alt="explosion" />
                        </div>
                        <div className="StatBox pixel-border">
                            <div className='statRow'>
                                <h3>{player.name}</h3>
                                <h3 className='heroLvl'>Lvl: {player.level}</h3>
                            </div>
                            
                               
                                    <div className='healthcontainer'>
                                        <div className='healthBarHero'>

                                        </div>
                                    </div>
                                
                                    <h3 className='hp'>HP:{heroHp}/{player.hp}</h3>
                            
                        </div>
                    </div>
                </div>
                <div className="BattlechoicesContainer pixel-border">
                    <p className="question">{mainText}</p>
                    <div className="attackList">
                        <div className="attackRow1">
                            <button className="attack" id='atk1' onClick={atk1}><img className="iconhover" src={sword} alt="sword" />{player.attacks[0]}</button>
                        
                            <button className="attack" id='atk2' onClick={atk2}><img className="iconhover" src={dice} alt="dice" />{player.attacks[1]}</button>
                            
                        </div>
                        <div className="attackRow2">
                            <button className="attack" id='atk3' onClick={atk3}>
                                <img className="iconhover" src={quiz} alt="quiz" />
                                {player.attacks[2]} </button>
                            <button className="attack" id='atk4' onClick={heal}>
                                <img className="iconhover" src={heal1} alt="heal" />
                                {player.attacks[3]}</button>
                        </div>
                        <div className="attackRow2">
                            <button className="attack hide" id='qT' onClick={quizTrue}>True </button>
                            <button className="attack hide" id='qT1' onClick={quizFalse}>False</button>
                            <button className="attack hide" id='hT' onClick={quiz2True}>True </button>
                            <button className="attack hide" id='hT1' onClick={quiz2False}>False</button>
                        </div>
                        <div className="attackRow2">
                            <button className="attack hide" id='backBtn'>Back </button>
                            <button className="attack hide" id='contBtn'>Continue</button>
                        </div>
                    </div>
                </div>
                <div className="bottomNavContainer">
                    <>
                        <audio autoPlay loop ref={audioRef} src={song}/>
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
        ) : (
            <LoadingScreen />
        )}
        </>
        )
    }