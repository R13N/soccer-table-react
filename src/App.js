import React, { useState } from 'react';
import './App.css';

import Match from './components/Match';

function App() {

  const teamOneName = 'brasil';
  const teamTwoName = 'argentina';
  const teamThreeName = 'uruguai';
  const teamFourName = 'paraguai';

  const [match3HomeName, setMatch3HomeName] = useState('venc. sf1');
  const [match3AwayName, setMatch3AwayName] = useState('venc. sf2');
  const [championName, setChampionName] = useState('');

  function getMatch1Winner(matchWinner){
    if(matchWinner){
      setMatch3HomeName(matchWinner)
    } else {
      setMatch3HomeName('venc. sf1')
    }
    console.log(matchWinner)
  }

  function getMatch2Winner(matchWinner){
    if(matchWinner){
      setMatch3AwayName(matchWinner)
    } else {
      setMatch3AwayName('venc. sf2')
    }
  }

  function getMatch3Winner(matchWinner){
    if(matchWinner){
      setChampionName(matchWinner)
    } else {
      setChampionName('venc. final')
    }
  }
  
  return (
    <div className="App">
      <h1 className="h1">MATA-MATA</h1>
      <div className="container">
        <div className="semiFinal">
          <h3 className="h3">Semi-finais</h3>
          <Match
            homeName={teamOneName} 
            awayName={teamTwoName}
            getMatchWinner={getMatch1Winner}
          />
          <Match
            homeName={teamThreeName} 
            awayName={teamFourName}
            getMatchWinner={getMatch2Winner}
          />
        </div>

        <div className="final">
          <h3>Finais</h3>
          <Match 
            homeName={match3HomeName}
            awayName={match3AwayName}
            getMatchWinner={getMatch3Winner}
          />
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
