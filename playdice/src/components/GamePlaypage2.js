import NumberSelector from "./NumberSelectorSection";
import RollDice from "./Rolldice";
import TotalScore from "./Scoredisplaysection";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../Button";
import RulesForGame from "./Rules";
const GamePlay = () => {

    // thisis state for   comparing dice img with number that we select 
    const [score, setscore] = useState(0);  
    const [selectedNumber, setselectedNumber] = useState();   
    const [currentDice, setcurrentDice] = useState(1);
    const [error,seterror]=useState("")
    const [showRules,setshowRules]=useState(false)
    // now we generate random number so that as we click on dice we get a number randomly
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const roledice = () => {

    

        if(!selectedNumber){
            seterror(" * you have not entered any number");
            return;
        }

        const randomNumber = generateRandomNumber(1, 8);
        setcurrentDice((prev) =>randomNumber);

        if(selectedNumber===randomNumber){
            setscore((prev)=> prev + randomNumber);
        }
        else{
            setscore((prev)=>prev-2);
        }
        setselectedNumber(undefined);
    };
    // function to reset score
    const resetScore=()=>{
        setscore(0);
    }

    return (

        <Container>
           <div className="title_section"> 
           <p className="title">Dice game</p>  
           </div>
            <div className="Top-section">
                <TotalScore
                score={score}

                /> {/* total score component*/}
                <NumberSelector
                    //  passing props
                    seterror={seterror}
                    error={error} 
                    selectedNumber={selectedNumber}
                    setselectedNumber={setselectedNumber}
                /> {/* number selection component*/}
            </div>
            <RollDice
                // passing props 
                currentDice={currentDice}
                roledice={roledice}
            />

            <div className="btn">
            <Button onClick={resetScore}>Reset Score</Button>
            <Button onClick={()=>setshowRules((prev)=>!prev)} >
                {showRules ? "Hide":"Show"} Rules</Button>
            </div>
            {showRules && <RulesForGame/>}
        </Container>

    );
}
export default GamePlay;

const Container = styled.div`
align-items:center;
  .Top-section{
    padding:15px 0px 25px 0px;
    display:flex;
  justify-content:space-between;
  
  }
  .btn{
    display:flex;
    flex-direction:column;
    align-items:center;s
  }
  
  .title_section{
    background-color:rgba(245, 214, 135, 0.713);
    padding:5px;
    text-align:center;
  }
  .title{
    padding:0px;
    margin:0px;
    color:rgba(182, 91, 35, 0.713);
    font-size:45px;
    font-weight:700;
    
  }



`;


