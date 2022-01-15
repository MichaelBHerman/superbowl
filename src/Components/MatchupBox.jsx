import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import './matchupbox.css';


import niners from '../Images/49ers.png';
import cowboys from '../Images/cowboys.png';
import buccs from '../Images/buccs.png';
import eagles from '../Images/eagles.png';
import packers from '../Images/packers.png';
import rams from '../Images/rams.png';
import cards from '../Images/cardinals.png';
import raiders from '../Images/raiders.png';
import bengals from '../Images/bengals.png';
import patriots from '../Images/patriots.png';
import bills from '../Images/bills.png';
import steelers from '../Images/steelers.png';
import titans from '../Images/titans.png';
import chiefs from '../Images/chiefs.png';
import sample from '../Images/football1.mp4';
import '../index.css';



    



function MatchupBox (props) {
    

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
let mvp;
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
  function getScore(min, max) {
    return Math.floor(Math.random() * max);
}
    let nfcScore = 0;
    let afcScore = 0;
    nfcScore = getScore(2, 55);
        console.log(nfcScore);
    afcScore = getScore(2, 55);
        console.log(afcScore);
  

  if(nfcScore > afcScore){
    switch (nfcTeam) {
    
        case '49ers':
            let players = ["Deebo Samuel", "Fred Warner", "Nick Bosa", "Elijah Mitchell", "Jimmy Garoppolo", "George Kittle", "Brandon Aiyuk"]
            mvp = players[Math.floor(Math.random()*items.length)];
            break;
        case 'Cowboys':
            let players1 = ["Dak Prescott", "Ezekiel Elliott", "Trevon Diggs", "Micah Parsons", "CeeDee Lamb", "Amari Cooper"]
            mvp = players1[Math.floor(Math.random()*items.length)];
            break;
        case 'Eagles':
            let players2 =["Jalen Hurts", "DeVonta Smith", "Jordan Howard", "Jalen Reagor", "Miles Sanders"]
            mvp = players2[Math.floor(Math.random()*items.length)];
            break;   
        case 'Packers':
            let players3 =["Aaron Rodgers", "Devonte Adams", "Aaron Jones", "Randall Cobb", "Mason Crosby"]
            mvp = players3[Math.floor(Math.random()*items.length)];
            break;
        case 'Buccaneers':
            let players4 =["Tom Brady", "Rob Gronkowski", "Leonard Fournette", "Mike Evans", "Scott Miller"]
            mvp = players4[Math.floor(Math.random()*items.length)];
            break;
        case 'Cardinals':
            let players5 =["Kyler Murray", "J.J. Watt", "James Conner", "A.J. Green", "Chandler Jones", "Christian Kirk"]
            mvp = players5[Math.floor(Math.random()*items.length)];
            break;
        case 'Rams':
            let players6 =["Matthew Stafford", "Odell Beckham Jr.", "Von Miller", "Cooper Kupp", "Aaron Donald", "Jalen Ramsey"]
            mvp = players6[Math.floor(Math.random()*items.length)];
            break;    
    }
  }
  else {
    switch (afcTeam) {
        case 'Raiders':
            let players7 =["Derek Carr", "Josh Jacobs", "DeSean Jackson", "Hunter Renfrow", "Denzel Perryman", "Darren Waller"]
            mvp = players7[Math.floor(Math.random()*items.length)];
            break;
        case 'Bengals':
            let players8 = ["Joe Burrow", "Joe Mixon", "Ja'Marr Chase", "Tee Higgins", "Trey Hendrickson"]
            mvp = players8[Math.floor(Math.random()*items.length)];
            break;
        case 'Patriots':
            let players9 = ["Mac Jones", "Damien Harris", "Jakobi Meyers", "Hunter Henry", "Matthew Judon"]
            mvp = players9[Math.floor(Math.random()*items.length)];
            break;   
        case 'Bills':
            let players10 = ["Josh Allen", "Devin Singletary", "Stefon Diggs", "Tremaine Edmunds", "Micah Hyde"]
            mvp = players10[Math.floor(Math.random()*items.length)];
            break;
        case 'Steelers':
            let players11 = ["Ben Roethlisberger", "Najee Harris", "Diontae Johnson", "Minkah Fitzpatrick", "T.J. Watt"]
            mvp = players11[Math.floor(Math.random()*items.length)];
            break;
        case 'Chiefs':
            let players12 =["Patrick Mahomes", "Tyreek Hill", "Clyde Edwards-Helaire", "Travis Kelce", "Tyrann Mathieu"]
            mvp = players12[Math.floor(Math.random()*items.length)];
            break;
        case 'Titans':
            let players13 =["Ryan Tannehill", "Derrick Henry", "Harold Landry III", "A.J. Brown"]
            mvp = players13[Math.floor(Math.random()*items.length)];
            break;    
      }
  }
    return(
        <div>

      
        <div class="wrapper">
            
    <div class="left">
    <h3>AFC: ({afcTeam})</h3>
    <img src={timage}/>
    {/* <h5>({afcScore})</h5> */}

    <h3>NFC: ({nfcTeam})</h3>
      <img src={image}/>
     {/* <h5>({nfcScore})</h5>  */}
      
       

        
        
    </div>
    <div class="right">
        <div class="info">
            <h3>2022 SuperBowl Prediction</h3>
            <h5>{afcTeam}: {afcScore}</h5>
            <h5>{nfcTeam}: {nfcScore}</h5>
            
            <div class="info_data">
                 <div class="data">
                    {/* <h4>AFC Team Stats</h4> */}
                   
                
            
                 </div>
                 <div class="data">
                   {/* <h4>NFC Team Stats</h4> */}
                 
              
              </div>
            </div>
        </div>
      
      <div class="projects">
            <h3>SuperBowl MVP</h3>
            <div class="projects_data">
                <h2>{mvp}</h2>
                 <div class="data">
                </div>
              
            
                 </div>
                 <div class="data">
                 {/* place more available sessions here */}
              </div>
            </div>
        </div>
      
        
    </div>
</div>
            
           
        
       
        
    )
}
export default MatchupBox;