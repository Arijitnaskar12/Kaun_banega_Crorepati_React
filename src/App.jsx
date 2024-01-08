import React, { useEffect, useMemo, useState } from 'react'
import '../src/App.css';
import QandA from './components/QandA';
import Timer from './components/Timer';
import Start from './components/Start';
import data from '../Constant';

const App = () => {
  const [username,setUsername]=useState("");
  const [questionNumber,setQuestionNumber]=useState(1);
  const[stop,setStop]=useState(0);
  const[earned,setEarned]=useState("₹ 0");
  const moneyPyramid=useMemo(()=>
  [
  {id:1,amount:'₹ 100'},
  {id:2,amount:'₹ 200'},
  {id:3,amount:'₹ 300'},
  {id:4,amount:'₹ 500'},
  {id:5,amount:'₹ 1000'},
  { id: 6, amount: "₹ 2000" },
  { id: 7, amount: "₹ 4000" },
  { id: 8, amount: "₹ 8000" },
  { id: 9, amount: "₹ 16000" },
  { id: 10, amount: "₹ 32000" },
  { id: 11, amount: "₹ 64000" },
  { id: 12, amount: "₹ 125000" },
  { id: 13, amount: "₹ 250000" },
  { id: 14, amount: "₹ 500000" },
  { id: 15, amount: "₹ 10000000" },

].reverse(),[]); 
  
  useEffect(()=>{
    setEarned(moneyPyramid.find((money)=>money.id===questionNumber-1)?.amount);
  },[moneyPyramid,questionNumber])
  return (
   
        <div className='app'>
         {
      username ?<>
      <div className="main">
    {stop?<h1 className='endtext'>You earned:{earned?earned:"₹ 0"}</h1>:(
     <>
      <div className="top">
        <div className="timer"><Timer  questionNumber={questionNumber} setStop={setStop}/>
         </div>
      </div>
      <div className="bottom">
        <QandA data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
      </div>
      </>)}:
    </div>
    <div className="pyramid">
      <ul className="moneyList">
      {
        moneyPyramid.map((item)=>(
          <li className={questionNumber==item.id ?"moneyListItem active":"moneyListItem"}>
          <span className="moneyListItemNumber">{item.id}</span>
          <span className="moneyListItemAmount">{item.amount}</span>
          </li>
        ))
      }
      </ul>
      </div>
      </>
      :(
        <Start setUsername={setUsername}/>
      )
    }
    </div>
    
  )
}

export default App;