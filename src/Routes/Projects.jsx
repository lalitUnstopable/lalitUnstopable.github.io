import React from 'react'

import {

  Center,
  SimpleGrid,
  Box,
  Image,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import WhiteFeather from "../Assets/WhiteFeather.jpeg";
import lalitPortfolio from "../Assets/lalitPortfolio.png";
import freshly from "../Assets/Freshly.jpeg";
import Todo from "../Assets/TodoApp.jpeg";

const Projects = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 950);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 950);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div>
       {isDesktop ? (
        <div>
          <div
            style={{ width: "85%", margin: "auto" }}
            id="project"
          >
            <br />
            <br />
            <br />
            <Center>
              <Heading
                as="h1"
                size="3xl"
                noOfLines={1}
                padding="20px"
                
              >
                My Projects
              </Heading>
            </Center>
            <br />
            <br />
            <br />

            <SimpleGrid minChildWidth="400px" spacing="70px" mb="20px">
              
            <Box
                style={{
                  padding: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                }}
              >
               <Center>
                  <Heading>Todo App</Heading>
                </Center>
                <br />
                <Center >
                  {" "}
                  <Image
                    boxSize="300px"
                    width="100%"
                    borderRadius="20px"
                    src={Todo}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
               
                <Center>
                  <Text fontWeight={"medium"}>
                  Todo App project is an application specially built to keep track of tasks that need to be done.
                  This application will be like a task keeper where the user would be able to enter the tasks 
                  that they need to do. Once they are done with their tasks they can also remove them from the list.
                 </Text>
                </Center>
                <br />
                <Center >
               

                <Text as="b" fontSize={"30px"}>TECH STACK </Text> <Text as="b" fontSize={"30px"}>&nbsp;:&nbsp;</Text> <Text as="b" color={"grey"} fontSize={"30px"}>ReactJs,Chakra UI</Text>
                </Center>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a  href="https://github.com/lalitUnstopable/Todo-App">
                    <Button bg="black" color="white" variant='solid'>Github</Button>
                  </a>
                  <a  href="https://localdata.netlify.app/">
                    <Button bg="black" color="white" variant='solid'>Deploy</Button>
                  </a>
                </div>
              </Box>
              <Box
                style={{
                  padding: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"

                  // boxShadow:
                    // "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
              <Center>
                  <Heading>Freshly Clone</Heading>
                </Center>
                <br />
                <Center>
                  {" "}
                  <Image
                    boxSize="300px"
                    width="100%"
                    borderRadius="20px"
                    src={freshly}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                
                <Center>
                  <Text fontWeight={"medium"}>
                  Freshly is the leading prepared meal delivery subscription service providing nutritionist-approved, 
                  balanced meals that are delivered fresh to your door and ready-to-eat
                  in three minutes. Freshly delivers effortless nourishment that works for real life.
                  </Text>
                </Center>
                <br />
                <Center>
                <Text as="b" fontSize={"30px"}>TECH STACK </Text> <Text as="b" fontSize={"30px"}>&nbsp;:&nbsp;</Text> <Text as="b" color={"grey"} fontSize={"30px"}>Html,Css,JavaScript</Text>

                </Center>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a  href="https://github.com/lalitUnstopable/FreshlyClone/tree/main/Freshly%20Clone">
                    <Button bg="black" color="white" variant='solid'>Github</Button>
                  </a>
                  <a  href="https://lucky-longma-b5b6e1.netlify.app/">
                    <Button bg="black" color="white" variant='solid'>Deploy</Button>
                  </a>
                </div>
              </Box>
              {/* boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" */}
              <Box
                style={{
                  padding: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"

                }}
              >
               <Center>
                  <Heading>WhiteFeather</Heading>
                </Center>
                <Center>
                  {" "}
                  <Image
                    boxSize="300px"
                    width="100%"
                    borderRadius="20px"
                    src={WhiteFeather}
                    alt="Dan Abramov"
                    mt="20px"
                  />
                </Center>
                <br />
               
                <br />
                <Center>
                  <Text fontWeight={"medium"}>
                  WhiteFeather is an  e-commerce 
                  plateform that sells cosmetics and personal care products. It
                  has given a premium experience of makeup and skincare that has raised questions on general beauty standards and
                   has spread across the movement of positivity and self-confidence.
                  </Text>
                </Center>
                <br />
                <Center>
                <Text as="b" fontSize={"30px"}>TECH STACK </Text> <Text as="b" fontSize={"30px"}>&nbsp;:&nbsp;</Text> <Text as="b" color={"grey"} fontSize={"30px"}>ReactJs,Chakra UI</Text>
                </Center>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a  href="https://github.com/KanhaiyaChauhan037/succinct-wrench-1095">
                    <Button bg="black" color="white" variant='solid'>Github</Button>
                  </a>
                  <a href="https://whitefeather.netlify.app/">
                    <Button bg="black" color="white" variant='solid'>Deploy</Button>
                  </a>
                </div>
              </Box>

              <Box
                style={{
                  padding: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}
                  >
                   <Center>
                  <Heading>My Portfolio</Heading>
                </Center>
                <br />
                <Center>
                  {" "}
                  <Image
                    boxSize="300px"
                    width="100%"
                    borderRadius="20px"
                    src={lalitPortfolio}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
               
                <Center>
                  <Text fontWeight={"medium"}>
                  My portfolio is a compilation of materials that exemplifies my beliefs, skills, qualifications, education, training and experiences. 
                  It provides me personality and work ethic.
                  </Text>
                </Center>
                <br />
                <Center>
                <Text as="b" fontSize={"30px"}>TECH STACK </Text> <Text as="b" fontSize={"30px"}>&nbsp;:&nbsp;</Text> <Text as="b" color={"grey"} fontSize={"30px"}>ReactJs,Chakra UI</Text>

                </Center>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a  href="https://github.com/lalitUnstopable/lalitUnstopable.github.io/tree/master">
                    <Button bg="black" color="white" variant='solid'>Github</Button>
                  </a>
                  <a  href="https://lalitunstopable.github.io/">
                    <Button bg="black" color="white" variant='solid'>Deploy</Button>
                  </a>
                </div>
              </Box>
             </SimpleGrid>
          </div>
        </div>
      ) : (
        <div>
          <div style={{ width: "90%", margin: "auto" }} id="project">
            <Center>
              <Heading
                as="h1"
                size="2xl"
                noOfLines={1}
                // style={{ marginTop: "320px" }}
              >
                My <span >Projects</span>
              </Heading>
            </Center>

            <br />
            <br />
            <SimpleGrid minChildWidth="200px" spacing="80px" mb="30px">
            <Box
                style={{
                  padding: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"

                }}
              >
               <Center>
                  <Heading>Todo App</Heading>
                </Center>
                <br />
              <Center>
                  {" "}
                  <Image
                    boxSize="300px"
                    width="100%"
                    borderRadius="20px"
                    src={Todo}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
               
                <Center textAlign={"center"}>
                  <Text fontWeight={"medium"}>
                  Todo App project is an application specially built to keep track of tasks that need to be done.
                  This application will be like a task keeper where the user would be able to enter the tasks 
                  that they need to do. Once they are done with their tasks they can also remove them from the list.
                    <br />
                    <br />
                    <b>TECH STACK</b>&nbsp;:&nbsp;<b>Html,Css,ReactJs</b>
                  </Text>
                </Center>
                <br />
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a href="https://github.com/lalitUnstopable/Todo-App">
                    <Button bg="black" color="white" variant='solid'>Github</Button>
                  </a>
                  <a href="https://localdata.netlify.app/">
                    <Button bg="black" color="white" variant='solid'>Deploy</Button>
                  </a>
                </div>
              </Box>
              <Box
                style={{
                  padding: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                }}
              >
               <Center>
                  <Heading>Freshly Clone</Heading>
                </Center>
                <br />
                 <Center>
                  {" "}
                  <Image
                    boxSize="300px"
                    width="100%"
                    borderRadius="20px"
                    src={freshly}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
               
                <Center textAlign={"center"}>
                  <Text fontWeight={"medium"}>
                  Freshly is the leading prepared meal delivery subscription service providing nutritionist-approved, 
                  balanced meals that are delivered fresh to your door and ready-to-eat
                  in three minutes.Freshly delivers effortless nourishment that works for real life.
                    <br />
                    <br />
                    <b>TECH STACK </b>&nbsp;:&nbsp;<b>Html,Css,JavaScript</b>
                  </Text>
                </Center>
                <br />
                
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a href="https://github.com/lalitUnstopable/FreshlyClone/tree/main/Freshly%20Clone">
                    <Button bg="black" color="white" variant='solid'>Github</Button>
                  </a>
                  <a href="https://lucky-longma-b5b6e1.netlify.app/">
                    <Button bg="black" color="white" variant='solid'>Deploy</Button>
                  </a>
                </div>
              </Box>
              <Box
                style={{
                  padding: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                }}
              >
               <Center>
                  <Heading>My Portfolio</Heading>
                </Center>
                <br />
              <Center>
                  {" "}
                  <Image
                    boxSize="300px"
                    width="100%"
                    borderRadius="20px"
                    src={lalitPortfolio}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
               
                <Center textAlign={"center"}>
                  <Text fontWeight={"medium"}>
                  My portfolio is a compilation of materials that exemplifies my beliefs, skills, qualifications, education, training and experiences. 
                  It provides me personality and work ethic.
                    <br />
                    <br />
                    <b>TECH STACK </b>&nbsp;:&nbsp;<b>ReactJs,Chakra UI</b>
                  </Text>
                </Center>
                <br />
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a href="https://github.com/lalitUnstopable/lalitUnstopable.github.io/tree/master">
                    <Button bg="black" color="white" variant='solid'>Github</Button>
                  </a>
                  <a href="https://lalitunstopable.github.io/">
                    <Button bg="black" color="white" variant='solid'>Deploy</Button>
                  </a>
                </div>
              </Box>
             
              <Box
                style={{
                  padding: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                }}
              >
               <Center>
                  <Heading>WhiteFeather</Heading>
                </Center>
                <br />
                 <Center>
                  {" "}
                  <Image
                    boxSize="300px"
                    width="100%"
                    borderRadius="20px"
                    src={WhiteFeather}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
               
                <Center textAlign={"center"}>
                  <Text fontWeight={"medium"}>
                  WhiteFeather is an  e-commerce 
                  plateform that sells cosmetics and personal care products. It
                  has given a premium experience of makeup and skincare that has raised questions on general beauty standards and
                   has spread across the movement of positivity and self-confidence.
                    <br />
                    <br />
                    <b>TECH STACK </b>&nbsp;:&nbsp;<b>Html,Css,ReactJs</b>
                    </Text>
                </Center>
                <br />
                
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a href="https://github.com/KanhaiyaChauhan037/succinct-wrench-1095">
                    <Button bg="black" color="white" variant='solid'>Github</Button>
                  </a>
                  <a href="https://whitefeather.netlify.app/">
                    <Button bg="black" color="white" variant='solid'>Deploy</Button>
                  </a>
                </div>
              </Box>
            </SimpleGrid>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects

