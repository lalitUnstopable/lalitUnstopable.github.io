import { Box, Button, Img, Text } from '@chakra-ui/react';
import React from 'react';
import image from "../Assets/3d08e03cb40252526fee2036a67f07f1.gif";
import pdf from "../Assets/Lalit-Pawar-Resume.pdf";
import { TypeAnimation } from "react-type-animation";

// import Style from "../CSS/Home.module.css"


const Home = () => {

  return (
    <>
    <Box w="100%" h="100%">
     <Img src={image} h="650px" w="100%" m="auto" alt="" />
     <Text color ="white" fontSize={["70px","80px","90px","100px"]} textAlign={"center"} lineHeight="1.1"
     position= "absolute" 
     top={["15%","30%","35%","30%"]} 
    //  top="30%"
     left= {["0%","8%","7%","25%"]} 
    //  left="25%"
     >Lalit Sarjerao Pawar</Text> 

    <Text color ="white" fontSize="50px" textAlign={"center"} lineHeight="1.1"
     position= "absolute" 
     top={["50%","60%","65%","55%"]} 
    //  top="55%"
     left={[ "5%", "10%", "20%", "30%"]}
    //  left="30%"
      >
                        <TypeAnimation
                        style={{ color: "white" }}
                        sequence={[" Full Stack Web Developer", 500, ""]}
                        speed={40} // Must be in range between 1 and 99!
                        wrapper="span"
                        repeat={Infinity}
                      />
     </Text> 
      <a href={pdf} download>
     <Button color ="black" fontSize="40px"  textAlign={"center"} lineHeight="1.1" p="40px 30px 40px 30px" bg="white" 
      _hover={{color:"black",backgroundColor:"white"}} 
      position= "absolute" 
      top={["70%", "78%", "80%", "72%"]}  
      // top="72%"
      left={["22%" ,"40%" ,"40%" ,"42%" ]}
      // left="42%"
      >Resume</Button>
      </a>
    </Box>
  
    </>
   )
}

export default Home
//1400*1200 desktop
//1200*2000 tablet