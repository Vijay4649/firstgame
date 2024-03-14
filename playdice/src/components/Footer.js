import styled from "styled-components"
import { FaCopyright, FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const FooterSection=()=>{
    return(
<Container>
<div className="Footer_section_1">
<p >DESIGNED BY</p>
<h2>VIJAY BOCHARE</h2>
<p>Thank you for  Visiting My<span>Dice App !</span></p>
<p>Copyright <FaCopyright/>2024</p>
</div>
<div className="social_media">
<p>Contact-me</p>
<div className="Footer_section_2">
<span><a href="https://ghttps://github.com/Vijay4649ithub.com/Vijay4649"><FaGithub/></a></span>
<span><a href="https://www.linkedin.com/in/vb8975"><FaLinkedinIn/></a></span>
<span><FaTwitter/></span>
</div>
<p>vjjaypatil220@gmail.com</p>
</div>

</Container>
    )
}
export default FooterSection;


const Container=styled.div`
display:flex;
justify-content:space-between;
bottom:0px;
width:500px;
position:relative;
margin:0 auto ;
margin-top:10%;
margin-bottom:15px;
padding-bottom:0px;
p{
    padding: 0px;
     margin:0px; 
     font-size:10px;
     font-weight: 600;
}


h2{
    padding: 0px; 
    margin-top:2px;
    margin-bottom:2px;
     font-size:15px;
     font-weight: 700;
    color: chocolate;
}
p span{
    color: rgb(178, 108, 58);
}
span{
    padding-right:15px;
}


@media screen and (max-width:450px){
bottom:-180px;
width:250px;
position:relative;
display: flex; 
margin:15%  15% 1px 15% ;
padding-bottom:0px;
p{
    padding: 0px;
     margin:0px; 
     font-size:9px;
     font-weight: 600;
}
h2{
    padding: 0px; 
    margin-top:2px;
    margin-bottom:2px;
     font-size:13px;
     font-weight: 700;
    color: chocolate;
}
p span{
    color: rgb(178, 108, 58);
}

}

`;