import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home.js';
import Currencies from './components/Currencies/Currencies.js';
import Header from './components/Header/Header.js';



function App() {

// new state to contain the array of the coins (type and value)
  const [coins,setCoins]=useState([
    { type:'dollar',value:4 },
    { type:'euro',value:5 },
    { type:'shekel',value:1 }
  ])

// new state to contain the array of all of the exchanges the user made
const [exchanges,setExchanges]=useState([
  { from:'shekel',to:'dollar',quantity:1,result:4 }
])


const addNewEx = ( f, t, q, res ) =>{
  let exIndex = exchanges.findIndex(ex => ex.result === res);
   if (exIndex !== -1 && exchanges.from === f && exchanges.to === t ){
    return;
  }
  setExchanges( [ ...exchanges, { from:f, to:t, quantity:q, result:res } ] )
}

const removeEx = exToRem =>{
    let tempExs = [...exchanges];
    tempExs.splice(exToRem,1);
    setExchanges([...tempExs]);
}

const addNewCoin = ( t, v )=>{
  let coinIndex = coins.findIndex(c => c.type === t);
  if (coinIndex !== -1){
    coins[coinIndex].value = v;
    return;
  }
  setCoins([...coins, { type:t, value:v }]);
  return;
};



return (
  <div >
    <Router>
 
    <Header  />
      <div className="App">
<Switch>
  
<Route exact
          path="/"
          component={() => (
            <Home  coins={coins} setExchanges={setExchanges} addNewEx={addNewEx} exchanges={exchanges} removeEx={removeEx} />
          )} />



<Route exact
          path="/currencies"
          component={() => (
            <Currencies  coins={coins} addNewCoin={addNewCoin}  />
          )} />




</Switch>
</div>
    </Router>
  </div>
);
}

export default App;
