import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import play from '../sounds/play.mp3';
import correct from '../sounds/correct.mp3';
import wrong from '../sounds/wrong.mp3';
const QandA = ({data,setStop,questionNumber,setQuestionNumber}) => {
    const[question,setQuestion]=useState(null);
    const[className,setClassName]=useState('answer');
    const[selectedans,setSelectedAns]=useState({});
    const[letsPlay]=useSound(play);
    const[correctAnswer]=useSound(correct);
    const[wrongAnswer]=useSound(wrong);
    
    useEffect(()=>{letsPlay()},[letsPlay])
    useEffect(()=>{
        setQuestion(data[questionNumber-1]);
    },[data,questionNumber]);
    const delay=(duration,callback)=>{
        setTimeout(()=>{
            callback();
        },duration)
    }
   const handleanswer=(answer)=>{
    setSelectedAns(answer);
    setClassName('answer active');
    delay(3000,()=>{ setClassName(answer.correct?"answer correct":"answer wrong")})
    delay(5000,()=>{
        if(answer.correct)
        {
            correctAnswer();
            delay(1000,()=>{

                setQuestionNumber(prev=>prev+1);
                if(questionNumber==data.length)
                {
                    setStop(true);
                }
                setSelectedAns(null);
            });
        }else{
            wrongAnswer();
            delay(1000,()=>{
                setStop(true);

            })
        }
    })

    }
  return (
    <div className='QandA'>
        <div className="question">{question?.question}</div>
        <div className="answers">
           {
            question?.answers.map((answer,i)=>(
                <div className={selectedans===answer?className:"answer"} key={i} onClick={()=>handleanswer(answer)}>{answer.text}</div>
            ))
           }
        </div>
    </div>
  )
}

export default QandA;