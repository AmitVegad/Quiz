import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";


function Question() {
  const [data,setData] = useState('')
  const [currquestion,setCurrentQuestion] = useState(0);
  const [selected,setSelected] = useState([]);
  const [score,setScore] = useState(0);
  const [totalScore,setTotalScore] = useState(0);
  const history = useHistory();

  useEffect(()=>{

    axios.get('http://localhost:3000/quiz').then((res)=>{
      console.log(res);
      setData(res.data)
 
    })
  },[])
  const nextQuestion = () =>{

    if(selected.length !== 0){
      let _score = 0;
      if(data[currquestion].IsMultipleAns){
          setTotalScore( totalScore + data[currquestion].answer.length )
          if(JSON.stringify(selected)===JSON.stringify(data[currquestion].answer)){
              _score = selected.length;
              console.log("in if",_score);
          }else{
            for(var i=0;i<selected.length;i++){
              if(data[currquestion].answer.includes(selected[i])){
                  _score += 1;
              }
            }
              console.log("in else",_score);
          }
      }else{
        if(selected.length === 1 && selected.includes(data[currquestion].answer)){
          _score = 1;
        }
        setTotalScore( totalScore + 1 )
      }
      setScore(score + _score);
      setSelected([])
      setCurrentQuestion(currquestion + 1);
    }
  }
  const submitquiz = () =>{
    if(selected.length !== 0){
      nextQuestion();
      history.push({
          pathname: '/result',
          state: { score: score, totalScore: totalScore}
        });
    }
 
  }
  const optionSelcted = (e)=>{
    let _selected = [...selected];
    if(e.target.checked){
        _selected.push(parseInt(e.target.value));
    }else{
      _selected.splice(_selected.indexOf(parseInt(e.target.value)), 1);
    }
    setSelected(_selected);
  }
  return (
    <div className="App">
        <div className="main">
          <div className="question-number">
            <p className="question-heading">Question</p><span className="PI">{currquestion + 1}<b className="bot">{data.length}</b></span>
          </div>
          <div className="Questions">
            <p>{data && data[currquestion].question}</p>
          </div>
          <div className="option">
            {data && data[currquestion].option.map((options,i)=>{
              return(
                <>
                <span key={data[currquestion].id}>
                  <input  type="checkbox" onChange={optionSelcted} id={options} name="option" value={i}/>
                  <label htmlFor={options}>{options}</label>
                </span>
                </>
              )
            })}
          </div>

          <button type="button" onClick={currquestion + 1 === data.length ? submitquiz : nextQuestion} className="btn">{currquestion + 1 === data.length ? "Submit" : "Next Questions"}</button>
      </div>
    </div>
 
  );
}

export default Question;
