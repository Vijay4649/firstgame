import styled from "styled-components";
const RulesForGame=()=>{
    return(
<RulesSection>
    <
        h2>Follow Instruction before playing game</h2>
   <div className="text">
   <p>1.Select Any number</p>
    <p>2.click on dice to roll</p>
    <p>3.click on reset button to reset score</p>
    <p>4.Play Now you are ready</p>

   </div>

</RulesSection>

    )
}

export default RulesForGame;

const RulesSection=styled.div`
background-color:rgba(245, 214, 135, 0.713);
max-width:600px;
margin:0 auto;
padding:15px;
margin-top:45px;
margin-bottom:45px;
border-radius:5px;
h2{
    font-size:15px;
}
.text p{
    font-size:12px;
    padding:0px;
}
@media screen and (max-width:450px){

    max-width:400px;
    margin:0 auto;
    padding:15px;
    margin-top:45px;
    margin-bottom:45px;
    border-radius:5px;

    h2{
        font-size:14px;
    }
    .text p{
        font-size:11px;
        padding:0px;
    }

}



`