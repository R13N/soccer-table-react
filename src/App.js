import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const teamOneName = 'brasil';
  const teamTwoName = 'argentina';
  const teamThreeName = 'uruguai';
  const teamFourName = 'paraguai';

  const [match3HomeName, setMatch3HomeName] = useState('Venc. SF1');
  const [match3AwayName, setMatch3AwayName] = useState('Venc. SF2');
  const [championName, setChampionName] = useState('');


  const [match1HomeGoals, setMatch1HomeGoals] = useState(0);
  const [match1AwayGoals, setMatch1AwayGoals] = useState(0);

  const [match2HomeGoals, setMatch2HomeGoals] = useState(0);
  const [match2AwayGoals, setMatch2AwayGoals] = useState(0);

  const [match3HomeGoals, setMatch3HomeGoals] = useState(0);
  const [match3AwayGoals, setMatch3AwayGoals] = useState(0);

  function getMatch1HomeGoals(event){
    let target = event.target
    setMatch1HomeGoals(target.value)
  }

  function getMatch1AwayGoals(event){
    let target = event.target
    setMatch1AwayGoals(target.value)
  }

  function getMatch2HomeGoals(event){
    let target = event.target
    setMatch2HomeGoals(target.value)
  }

  function getMatch2AwayGoals(event){
    let target = event.target
    setMatch2AwayGoals(target.value)
  }

  function getMatch3HomeGoals(event){
    let target = event.target
    setMatch3HomeGoals(target.value)
  }

  function getMatch3AwayGoals(event){
    let target = event.target
    setMatch3AwayGoals(target.value)
  }

  function match1Winner(){
    if(match1HomeGoals > match1AwayGoals){
      setMatch3HomeName(teamOneName)
    } else if(match1HomeGoals < match1AwayGoals){
      setMatch3HomeName(teamTwoName)
    } else {
      setMatch3HomeName('venc. sf1')
    }
  }
  
  function match2Winner(){
    if(match2HomeGoals > match2AwayGoals){
      setMatch3AwayName(teamThreeName)
    } else if(match2HomeGoals < match2AwayGoals){
      setMatch3AwayName(teamFourName)
    } else {
      setMatch3AwayName('venc. sf2')
    }
  }

  function match3Winner(){
    if(match3HomeGoals > match3AwayGoals){
      setChampionName(match3HomeName)
    } else if(match3HomeGoals < match3AwayGoals){
      setChampionName(match3AwayName)
    } else {
      setChampionName('campeão')
    }
  }


  useEffect(
    match1Winner
  ,[
    match1HomeGoals, 
    match1AwayGoals, 
    match2HomeGoals, 
    match2AwayGoals, 
    match3HomeGoals, 
    match3AwayGoals
  ])
  
  useEffect(
    match2Winner
  ,[
    match1HomeGoals, 
    match1AwayGoals, 
    match2HomeGoals, 
    match2AwayGoals, 
    match3HomeGoals, 
    match3AwayGoals
  ])

  useEffect(
    match3Winner
  , [match3HomeName, 
    match3AwayName, 
    match3HomeGoals, 
    match3AwayGoals
  ])
  
  return (
    <div className="App">
      <h1 className="h1">MATA-MATA</h1>
      <div className="container">
        <div className="semiFinal">
          <h3 className="h3">Semi-finais</h3>
          <div className="match" id="match1">
            <div className="team">
              <span>{teamOneName}</span>
              <input type="number" className="goals" id="homeGoalsMatch1" onChange={getMatch1HomeGoals} value={match1HomeGoals}/>
            </div>
            <div className="team">
              <span>{teamTwoName}</span>
              <input type="number" className="goals" id="awayGoalsMatch1" onChange={getMatch1AwayGoals} value={match1AwayGoals}/>
            </div>
          </div>
        <div className="match" id="match2">
          <div className="team">
            <span>{teamThreeName}</span>
            <input type="number" className="goals" id="homeGoalsMatch2" onChange={getMatch2HomeGoals} value={match2HomeGoals}/>
          </div>
          <div className="team">
            <span>{teamFourName}</span>
            <input type="number" className="goals" id="awayGoalsMatch2" onChange={getMatch2AwayGoals} value={match2AwayGoals}/>
          </div>
        </div>
      </div>
    
      <div id="final">
        <h3>Finais</h3>
        <div className="match" id="match3">
          <div className="team">
            <span>{match3HomeName}</span>
            <input type="number" className="goals" id="homeGoalsMatch3" onChange={getMatch3HomeGoals} value={match3HomeGoals}/>
          </div>
          <div className="team">
           <span>{match3AwayName}</span>
           <input type="number" className="goals" id="awayGoalsMatch3" onChange={getMatch3AwayGoals} value={match3AwayGoals}/>
          </div>
        </div>
      </div>

      <div className="champion">
        <h3>Campeão</h3>
        <span>{championName}</span>
        
      </div>
    </div>
  </div>
  );
}

export default App;
