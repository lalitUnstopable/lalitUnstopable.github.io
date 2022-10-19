import { Box, Button, Img, Text } from '@chakra-ui/react';
import React from 'react';
import image from "../Assets/3d08e03cb40252526fee2036a67f07f1.gif";
// import Style from "../CSS/Home.module.css"


const Home = () => {
  return (
    <Box >
     <Img src={image} h={["1150px","1150px","1150px","650px"]} w="100%" alt="" />
     <Text color ="white" fontSize="100px" textAlign={"center"} lineHeight="1.1"
     position= "absolute" top= "50%" left= "50%" transform="translate(-50%, -50%)">Lalit Sarjerao Pawar</Text> 

    <Text color ="white" fontSize="50px" textAlign={"center"} lineHeight="1.1"
     position= "absolute" top= "70%" left= "50%" transform="translate(-50%, -50%)">Full Stack Web Developer</Text> 

     <Button color ="white" fontSize="40px" fontFamily= "Arial, Helvetica, sans-serif" textAlign={"center"} lineHeight="1.1" p="40px 30px 40px 30px" bg="#000080" 
     _hover={{color:"black",backgroundColor:"white"}} 
      position= "absolute" top= "85%" left= "50%" transform="translate(-50%, -50%)">Resume</Button>
  
    </Box>
  )
}

export default Home
