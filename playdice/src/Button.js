import styled from "styled-components";

export const Button=styled.button
`
width:22%;
background-color:black;
color:white;
font-weight:600;
padding:5px 10px 5px 10px;
border:1px solid transparent;
margin:5px;
margin-top:35px;
border-radius:5px;
cursor:pointer;
transition:0.4s background ease-in;

&:hover {
    background-color:white;
    color:black;
    border:1px solid black;
    transition:0.3s background ease-in;
}


@media screen and (max-width:450px){
width:25%;
background-color:black;
color:white;
font-weight:500;
font-size:12px;
padding:5px;

}









`;
