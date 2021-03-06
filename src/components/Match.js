import React, { useEffect, useState } from 'react';

export default function Match(props){

  const homeTeam = props.homeName;
  const awayTeam = props.awayName;

  const [matchHomeGoals, setMatchHomeGoals] = useState("");
  const [matchAwayGoals, setMatchAwayGoals] = useState("");
  const [matchWinner, setMatchWinner] = useState('');

  function getMatchHomeGoals(event){
    let target = event.target
    setMatchHomeGoals(target.value)
  }

  function getMatchAwayGoals(event){
    let target = event.target
    setMatchAwayGoals(target.value)
  }

  function getMatchWinner(){
    if(matchHomeGoals > matchAwayGoals){
      setMatchWinner(homeTeam)
    } else if(matchHomeGoals < matchAwayGoals){
      setMatchWinner(awayTeam)
    } else if (matchHomeGoals === matchAwayGoals){
      setMatchWinner('')
    }
  }

  useEffect((
    getMatchWinner
  ), [homeTeam, awayTeam, matchHomeGoals, matchAwayGoals])
  
  props.getMatchWinner(matchWinner);
  
  return(
    <div className="match">
      <div className="homeTeam">
        <span>{homeTeam}</span>
        <input 
          type="number" 
          className="homeGoals" 
          onChange={getMatchHomeGoals} value={matchHomeGoals}/>
      </div>
      <div className="awayTeam">
        <span>{awayTeam}</span>
        <input 
          type="number" 
          className="awayGoals" 
          onChange={getMatchAwayGoals} 
          value={matchAwayGoals}/>
      </div>
    </div>
  )
}