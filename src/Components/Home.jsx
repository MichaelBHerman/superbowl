import React from 'react';


let items = ["49ers", "Cowboys", "Eagles", "Buccaneers", "Packers", "Cardinals", "Rams"]
let nfcTeam = items[Math.floor(Math.random()*items.length)];

let item = ["Raiders", "Bengals", "Steelers", "Chiefs", "Patriots", "Bills", "Titans"]
let afcTeam = item[Math.floor(Math.random()*item.length)];

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