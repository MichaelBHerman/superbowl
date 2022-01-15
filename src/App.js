import SuperbowlPicker from "./Components/Home";
import React from 'react';
import niners from './Images/49ers.png';
import cowboys from './Images/cowboys.png';
import buccs from './Images/buccs.png';
import eagles from './Images/eagles.png';
import packers from './Images/packers.png';
import rams from './Images/rams.png';
import cards from './Images/cardinals.png';
import raiders from './Images/raiders.png';
import bengals from './Images/bengals.png';
import patriots from './Images/patriots.png';
import bills from './Images/bills.png';
import steelers from './Images/steelers.png';
import titans from './Images/titans.png';
import chiefs from './Images/chiefs.png';
import sample from './Images/football1.mp4';
import './index.css';






function App() {
let items = ["49ers", "Cowboys", "Eagles", "Buccaneers", "Packers", "Cardinals", "Rams"]
let nfcTeam = items[Math.floor(Math.random()*items.length)];

let item = ["Raiders", "Bengals", "Steelers", "Chiefs", "Patriots", "Bills", "Titans"]
let afcTeam = item[Math.floor(Math.random()*item.length)];

let image;

switch (nfcTeam) {
    case '49ers':
        image = niners
        break;
    case 'Cowboys':
        image = cowboys
        break;
    case 'Eagles':
        image = eagles
        break;   
    case 'Packers':
        image = packers
        break;
    case 'Buccaneers':
        image = buccs
        break;
    case 'Cardinals':
        image = cards
        break;
    case 'Rams':
        image = rams
        break;    
}
let timage;

switch (afcTeam) {
  case 'Raiders':
      timage = raiders
      break;
  case 'Bengals':
      timage = bengals
      break;
  case 'Patriots':
      timage = patriots
      break;   
  case 'Bills':
      timage = bills
      break;
  case 'Steelers':
      timage = steelers
      break;
  case 'Chiefs':
      timage = chiefs
      break;
  case 'Titans':
      timage = titans
      break;    
}
  return (
    <div>
      {/* <SuperbowlPicker /> */}
      <video id='background-video' autoPlay loop muted>
      <source src={sample} type='video/mp4'/>
      </video>
      <h1>2022 SuperBowl Prediction:</h1>
            <h3>AFC: ({afcTeam})</h3>
            <h3>NFC: ({nfcTeam})</h3>
      <img src={image}/>
      <img src={timage}/>
    </div>
  );
}

export default App;
