import styled from "styled-components";
const TotalScore=({score})=>{
    return(
        <Main>
            <div>
            <h1>{score}</h1>
            <p>Total Score</p>
            </div>
      </Main>
    );
}

export default TotalScore;
const Main=styled.div`
padding:5px;
max-width:120px;
text-align:center;
h1{
    font-size:55px;
    font-weight:700;
    padding:0px;
    margin:0px;
}
p{
    font-size:20px;
    font-weight:700;
}


@media screen and (max-width:450px){
    padding:3px;
    margin-top:15px;
    margin-bottom:25px;
max-width:100px;
text-align:center;
h1{
    
    font-size:40px;
    font-weight:600;
    padding:0px;
    margin:0px;
}
p{
    font-size:18px;
    font-weight:600;
}

}

`;
