import React from 'react'
import enemyPic from '../assets/images/enemy.png'
import heroPic from '../assets/images/hero.png'

export default function Battle() {
    return (
        <div className="pageContainer creationBg">
            <div className="MainBattleContainer">
                <div className="battleContainer">
                    <div className="enemyRow">
                        <div className="StatBox">
                            <div className='statRow'>
                                <h3>Boss Name</h3>
                                <h3>Lvl: 15</h3>
                            </div>
                            <div className='healthBarContainer'>
                                <div className='statRow'>
                                <div className='healthBar50'></div>
                                <h3 className='hp'>HP:50</h3>
                                </div>
                            </div>
                        </div>
                        <img className="enemyPic" src={enemyPic} alt="Enemy" />
                    </div>
                    <div className="heroRow">
                        <img className="heroPic" src={heroPic} alt="Hero" />
                        <div className="StatBox">
                            <div className='statRow'>
                                <h3>Username</h3>
                                <h3>Lvl: 10</h3>
                            </div>
                            <div className='healthBarContainer'>
                                <div className='statRow'>
                                <div className='healthBar100'></div>
                                <h3 className='hp'>HP:100</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="BattlechoicesContainer">
                    <div className="attackList">
                        <div className="attackRow">
                            <div>Move 1</div>
                            <div>Move 2</div>
                        </div>
                        <div className="attackRow">
                            <div>Move 3</div>
                            <div>Move 4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}