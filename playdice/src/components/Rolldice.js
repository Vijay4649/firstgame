
import styled from "styled-components";
const RollDice=({roledice,currentDice})=>{
   


    return(
   <Container>
    {/* now we create onclick function on image div section so that as we click on image we get number */}
   <div className="Dice" onClick={roledice}>
    {/* using js we can change the image  */}
   <img src={`./dice/dice${currentDice}.jpg`} alt=""/>
   </div>
 <p>Click on Dice to Roll</p>
  
   </Container>
    );
}

export default RollDice;

const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
.Dice{
    cursor:pointer;
}
p{
    font-weight:600;
}
img{
    height:150px;
    width:150px;
    border-radius:10px;
}
@media screen and (max-width:450px){
   
    img{
        height:120px;
        width:120px;
        border-radius:10px;
    }
}

`;

