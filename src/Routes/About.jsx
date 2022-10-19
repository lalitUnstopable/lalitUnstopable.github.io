import { Box, Img, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react';
import prof from "../Assets/Lalit Profile Image.jpeg"


const About = () => {
  return (
    <Box 
    boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset">
        <Text textAlign="center" lineHeight={"2.5"} fontSize="4xl" mt="-10px">My Profile</Text>
            <Img src={prof} alt="img" borderRadius='full' boxSize='200px' 
             boxShadow = "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"
            textAlign="center" display="block" marginLeft="auto" marginRight="auto" marginTop={"8px"} mb="25px"/>
        <Box m="auto" w="60%" lineHeight={"1.7"} p="10px" fontSize={"20px"}
        //  bg="rgba(30, 32, 44, 0.95)" color="black"
        backgroundImage= "linear-gradient(rgba(42, 245, 152, 1) ,rgba(0, 158, 253, 1))"
    webkitBackgroundClip= "text"
    WebkitTextFillColor= "transparent"
    backgroundSize= "250%"
    transition= "500ms background-position"
       boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset" >
            <UnorderedList >
                <ListItem>I am a full stack web developer with a vast array of knowledge in frontend and backend languages,responsive 
                frameworks,database and best code practices.</ListItem>
                <ListItem>I successfully completed Mechanical Engineering from R.C.Patel Institute of Technology,Shirpur.</ListItem> 
                <ListItem>My objective is simply to be best web developer that I can be and to contribute to the technology industry.</ListItem> 
                <ListItem>I am dedicated to perfecting my craft by learning from more seasoned developers,remaining humble and continuously strides 
                to learn all that I can about developement.</ListItem>
                <ListItem>I studied Mathematics and I believe that my understanding of problem solving and complex algorithms are also skills 
                that have and will continue to contribute to my overall success as a developer.</ListItem>
            </UnorderedList>
        </Box>
    </Box>
    // bg="#c2fbd7" color="black"
  )
}

export default About;