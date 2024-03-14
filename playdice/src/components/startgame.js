import styled from "styled-components"
import { Button } from "../Button";


//  imp note **** if in function Start if pass only toggle then it give error because we get the value not funtion 
//so plz note while using function as parameter then write it in '{}' in bracket 
const Start=({toggle})=>{
    return(
        <Container>
            <div className="imageSection">
            <img src="./image/white_dice.png" alt="" />
            </div> 
            <div className="nameSection">
            <h1>Dice game</h1>
            <p>Click button to start Game</p> 
            {/* now here we use onclick function so that if we click on btn then we change the value fron false(default) to true 
            by passing the toggle function */}
            <Button onClick={toggle}>Start Game</Button>
            </div>
      </Container>
    
    );
}

export default Start;

const Container=styled.div`
display:flex;

justify-content:space-between;

div{
    margin:20px;
    width:50%   
}
img{
    height:40vw;
    width:100%;
}
.nameSection{
    text-align:center;
    margin-top:15%;
}
.nameSection h1{
    font-size:80px;
    font-weight:800;
    color:Black;
    margin:0px;
}
.nameSection p{
    color:Black;
    font-size:35px;
    font-weight:600;
    margin:0px;   
}

@media screen and (max-width:1100px){
    margin-top:10%;

}
@media screen and (max-width:850px){
    margin-top:3%;

    .nameSection h1{
        font-size:60px;
        font-weight:800;
        color:Black;
        margin:0px;
    }
    .nameSection p{
        font-size:25px;
    }


}

@media screen and (max-width:450px){
display:inline;
padding-top:25%;
div{
    margin:10px;
    width:95%;   
}
.imageSection{
    text-align:center;
}
img{
   height:50%;
    width:80%;
}
.nameSection{
    margin-top:0px;
}

.nameSection h1{
    font-size:60px;
    font-weight:800;
    color:Black;
}
.nameSection p{
    color:Black;
    font-size:18px;
    font-weight:500;  
}

`;




