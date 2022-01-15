import React from 'react';
import niners from '../Images/49ers.png';
import cowboys from '../Images/cowboys.png';
import buccs from '../Images/buccs.png';
import eagles from '../Images/eagles.png';
import packers from '../Images/packers.png';
import rams from '../Images/rams.png';
import cards from '../Images/cardinals.png';

let timage;

let items = ["49ers", "Cowboys", "Eagles", "Buccaneers", "Packers", "Cardinals", "Rams"]
let nfcTeam = items[Math.floor(Math.random()*items.length)];

let item = ["Raiders", "Bengals", "Steelers", "Chiefs", "Patriots", "Bills", "Titans"]
let afcTeam = item[Math.floor(Math.random()*item.length)];

switch (nfcTeam) {
    case '49ers':
        timage = {niners}
        break;
    case 'Cowboys':
        timage = {cowboys}
        break;
    case 'Eagles':
        timage = {eagles}
        break;   
    case 'Packers':
        timage = {packers}
        break;
    case 'Buccaneers':
        timage = {buccs}
        break;
    case 'Cardinals':
        timage = {cards}
        break;
    case 'Rams':
        timage ={rams}
        break;    
}

function SuperbowlPicker() {
    return(
        <div>
            <h1>2022 SuperBowl Prediction:</h1>
            <h3>AFC: ({afcTeam})</h3>
            <h3>NFC: ({nfcTeam})</h3>

        </div>
    )
}

export default SuperbowlPicker;