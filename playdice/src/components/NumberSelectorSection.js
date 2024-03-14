
// import { useState } from "react";
import styled from "styled-components";

const NumberSelector=( {seterror,error,selectedNumber,setselectedNumber})=>{
    const arrnumber=[1,2,3,4,5,6];
    // error handler 
    const NumberSelectorhandler=(value)=>{
        setselectedNumber(value);
        seterror("");
    }
   
    return(
       <Container>

        {/* here we are repeting box for six times so here comes js concept about array now we see 
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
        */}
        <p className="error">{error}</p>
        <Div>

        {/*  hence for this we have to use map func \ */}
         
         {arrnumber.map((value,i) => (
            <Box
            isselected={value===selectedNumber}  //this gives boolean value 
             key={i}
             onClick={()=>NumberSelectorhandler(value)}// we konw if we firectly pass value then it cant print we have to use it in arreow funct 
             >{value}
             </Box>
         ))}
         </Div>

         <p>Select Any Number</p>
       </Container>  
    );
}
export default NumberSelector;
const Container=styled.div`
padding-top:50px;
display:flex;
flex-direction:column;
align-items:end;
padding-right:15px;
p{
    padding:0px;
    margin:0px;
    font-weight:700;
}
.error{
    color:red;
}
@media screen and (max-width:450px){
    padding-top:10px;
    .error{
        font-size:12px;
    }


}

`
const Div=styled.div`
display:flex;
`
const Box =styled.div`
height:50px;
width:50px;
border:1px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight:700;
margin:3px;
background-color:${(props)=>(props.isselected ? "black":"white")};
color:${(props)=>(props.isselected ? "white":"black")};



@media screen and (max-width:450px){
    
height:35px;
width:35px;
border:1px solid black;
display:grid;
place-items:center;
font-size:20px;
font-weight:600;
margin:2px;

}

`;

