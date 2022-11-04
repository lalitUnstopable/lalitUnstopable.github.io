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
import project1 from "../Assets/project.jpeg";
import project2 from "../Assets/project1.png";
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

            <SimpleGrid minChildWidth="200px" spacing="70px" mb="20px">
              
            <Box
                style={{
                  padding: "20px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <Center>
                  {" "}
                  <Image
                    boxSize="200px"
                    width="100%"
                    borderRadius="20px"
                    src={Todo}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                <Center>
                  <Heading>Todo App</Heading>
                </Center>
                <br />
                <Center>
                  <Text>
                  Todo App project is an application specially built to keep track of tasks that need to be done.
                  This application will be like a task keeper where the user would be able to enter the tasks 
                  that they need to do. Once they are done with their tasks they can also remove them from the list.
                 </Text>
                </Center>
                <br />
                <Center>
                <Text fontSize="16px">

                  <b>Tech Stack </b> :
                  </Text>
                  Html,Css,ReactJs
                </Center>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a  href="https://github.com/lalitUnstopable/Todo-App">
                    <Button>Github</Button>
                  </a>
                  <a  href="https://localdata.netlify.app/">
                    <Button>Deploy</Button>
                  </a>
                </div>
              </Box>
              <Box
                style={{
                  padding: "20px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <Center>
                  {" "}
                  <Image
                    boxSize="200px"
                    width="100%"
                    borderRadius="20px"
                    src={freshly}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                <Center>
                  <Heading>Freshly Clone</Heading>
                </Center>
                <br />
                <Center>
                  <Text>
                  Freshly is the leading prepared meal delivery subscription service providing nutritionist-approved, 
                  balanced meals that are delivered fresh to your door and ready-to-eat
                  in three minutes. Freshly delivers effortless nourishment that works for real life.
                  </Text>
                </Center>
                <br />
                <Center>
                <Text fontSize="16px">

                  <b>Tech Stack </b> :
                  </Text>
                  Html,Css,JavaScript
                </Center>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a  href="https://github.com/lalitUnstopable/FreshlyClone/tree/main/Freshly%20Clone">
                    <Button>Github</Button>
                  </a>
                  <a  href="https://lucky-longma-b5b6e1.netlify.app/">
                    <Button>Deploy</Button>
                  </a>
                </div>
              </Box>
              {/* boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" */}
              <Box
                style={{
                  padding: "20px",
                  boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <Center>
                  {" "}
                  <Image
                    boxSize="200px"
                    width="100%"
                    borderRadius="20px"
                    src={project2}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                <Center>
                  <Heading>J-Crew Clone</Heading>
                </Center>
                <br />
                <Center>
                  <Text>
                  J.Crew has set the industry standard for quality, design, and style by sourcing fine fabrics from top-notch domestic and 
                  international mills. It create signature pieces—from Italian cashmere sweaters, to Japanese seersucker suits,
                  that will find a forever home in your wardrobe.
                  </Text>
                </Center>
                <br />
                <Center>
                <Text fontSize="16px">

                  <b>Tech Stack </b> : 
                  </Text> 
                   Html,css,Javascript
                </Center>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a  href="https://github.com/shivamgupta8482/jcrewteam">
                    <Button>Github</Button>
                  </a>
                  <a href="https://bejewelled-klepon-a99de5.netlify.app/">
                    <Button>Deploy</Button>
                  </a>
                </div>
              </Box>

              <Box
                style={{
                  padding: "20px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <Center>
                  {" "}
                  <Image
                    boxSize="200px"
                    width="100%"
                    borderRadius="20px"
                    src={project1}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                <Center>
                  <Heading>boAt Clone</Heading>
                </Center>
                <br />
                <Center>
                  <Text>
                  The boAt has got an astonishing collection of earphones, 
                  earbuds, headphones, and wireless speakers that stands apart due to the quality, 
                  affordability, and world-class designs that the company offers.
                  </Text>
                </Center>
                <br />
                <Center>
                  <Text fontSize="16px">
                  <b>Tech Stack </b> :
                  </Text>
                  ReactJs,Chakra Ui
                </Center>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a  href="https://github.com/rohity0/Team-BOAT">
                    <Button>Github</Button>
                  </a>
                  <a  href="https://famous-nougat-33aef3.netlify.app/">
                    <Button>Deploy</Button>
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
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
              <Center>
                  {" "}
                  <Image
                    boxSize="200px"
                    width="100%"
                    borderRadius="20px"
                    src={Todo}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                <Center>
                  <Heading>Todo App</Heading>
                </Center>
                <br />
                <Center>
                  <Text>
                  Todo App project is an application specially built to keep track of tasks that need to be done.
                  This application will be like a task keeper where the user would be able to enter the tasks 
                  that they need to do. Once they are done with their tasks they can also remove them from the list.
                    <br />
                    <br />
                    <b>Tech Stack </b>: Html,Css,ReactJs
                  </Text>
                </Center>
                <br />
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a href="https://github.com/lalitUnstopable/Todo-App">
                    <Button>Github</Button>
                  </a>
                  <a href="https://localdata.netlify.app/">
                    <Button>Deploy</Button>
                  </a>
                </div>
              </Box>
              <Box
                style={{
                  padding: "20px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                 <Center>
                  {" "}
                  <Image
                    boxSize="200px"
                    width="100%"
                    borderRadius="20px"
                    src={freshly}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                <Center>
                  <Heading>Freshly Clone</Heading>
                </Center>
                <br />
                <Center>
                  <Text>
                  Freshly is the leading prepared meal delivery subscription service providing nutritionist-approved, 
                  balanced meals that are delivered fresh to your door and ready-to-eat
                  in three minutes.Freshly delivers effortless nourishment that works for real life.
                    <br />
                    <br />
                    <b>Tech Stack </b>:Html,Css,JavaScript
                  </Text>
                </Center>
                <br />
                
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a href="https://github.com/lalitUnstopable/FreshlyClone/tree/main/Freshly%20Clone">
                    <Button>Github</Button>
                  </a>
                  <a href="https://lucky-longma-b5b6e1.netlify.app/">
                    <Button>Deploy</Button>
                  </a>
                </div>
              </Box>
              <Box
                style={{
                  padding: "20px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
              <Center>
                  {" "}
                  <Image
                    boxSize="200px"
                    width="100%"
                    borderRadius="20px"
                    src={project1}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                <Center>
                  <Heading>boAt Clone</Heading>
                </Center>
                <br />
                <Center>
                  <Text>
                  The boAt has got an astonishing collection of earphones, 
                  earbuds, headphones, and wireless speakers that stands apart due to the quality, 
                  affordability, and world-class designs that the company offers.
                    <br />
                    <br />
                    <b>Tech Stack </b>:ReactJs,Chakra Ui
                  </Text>
                </Center>
                <br />
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a href="https://github.com/rohity0/Team-BOAT">
                    <Button>Github</Button>
                  </a>
                  <a href="https://famous-nougat-33aef3.netlify.app/">
                    <Button>Deploy</Button>
                  </a>
                </div>
              </Box>
             
              <Box
                style={{
                  padding: "20px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                 <Center>
                  {" "}
                  <Image
                    boxSize="200px"
                    width="100%"
                    borderRadius="20px"
                    src={project2}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                <Center>
                  <Heading>J-Crew Clone</Heading>
                </Center>
                <br />
                <Center>
                  <Text>
                  J.Crew has set the industry standard for quality, design, and style by sourcing fine fabrics from top-notch domestic 
                  and international mills. It create signature pieces—from Italian cashmere sweaters, to Japanese seersucker suits, 
                  that will find a forever home in your wardrobe.
                    <br />
                    <br />
                   <b>Tech Stack </b> :Html,Css,JavaScript,Github 
                    </Text>
                </Center>
                <br />
                
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a href="https://github.com/shivamgupta8482/jcrewteam">
                    <Button>Github</Button>
                  </a>
                  <a href="https://bejewelled-klepon-a99de5.netlify.app/">
                    <Button>Deploy</Button>
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

