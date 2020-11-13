import React, { useRef, useEffect } from 'react'
import { reward } from '../../assets/images'

import './style.scss'

export const GameStatusBar = (props) => {
    const { stopTimer, gameDuration, gameReward = 0 } = props
    const hourRef = useRef(null)
    const minuteRef = useRef(null)
    const secondRef = useRef(null)
    const millisecondRef = useRef(null)

    const returnCorrectTimerData = (ref, input) => {
        if (ref.current && Number(ref.current.innerText) !== input) {
            ref.current.innerText = input > 10 ? input : `0${input}`
        }
    }

    useEffect(() => {
        let hour = 0;
        let minute = 0;
        let second = 0;
        let millisecond = 0;

        const timerIntervalId = setInterval(() => {
            if ((millisecond += 1) === 1000) {
                millisecond = 0;
                second++;
            }
            if (second === 60) {
                second = 0;
                minute++;
            }
            if (minute === 60) {
                minute = 0;
                hour++;
            }

            returnCorrectTimerData(hourRef, hour);
            returnCorrectTimerData(minuteRef, minute);
            returnCorrectTimerData(secondRef, second);
            returnCorrectTimerData(millisecondRef ,millisecond);
        }, 1)

        if (stopTimer) {
            clearInterval(timerIntervalId)
            gameDuration(() => {
                return `${hourRef.current.innerText}:${minuteRef.current.innerText}:${secondRef.current.innerText}:${millisecondRef.current.innerText}`
            })
        }

        return () => {
            clearInterval(timerIntervalId)
        }
    }, [stopTimer])

    return (
        <div className="game-status-bar">
            <div className="game-reward">
                <img src={reward} width={80} alt="reward" height={50}/>
                <span>{gameReward}</span>
            </div>
            <div className="timer-container">
                <span ref={hourRef}>00</span>:<span ref={minuteRef}>00</span>:<span ref={secondRef}>00</span>:<span ref={millisecondRef}>000</span>
            </div>
        </div>
    )
}
