import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Heading,
  Center,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Styles from "../CSS/Skills.module.css"
const Skills = () => {
  
      const techStack = [
   {
      id: 1,
      name: "HTML",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 2,
      name: "CSS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: 4,
      name: "ReactJs",
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      id: 5,
      name: "Redux",
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
    {
      id: 6,
      name: "NodeJs",
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      id: 7,
      name: "ExpressJs",
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    },
    {
      id: 8,
      name: "Mongo DB",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    },
    {
      id: 9,
      name: "TypeScript",
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      id: 10,
      name: "Chakra UI",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGp4_Tbfbq_a6vR95i0We9VhPLDl5rDtlug&usqp=CAU",
    },

    {
      id: 11,
      name: "Git",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    },
    {
      id:12,
      name: "VS Code",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ];

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
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
            style={{ width: "80%", margin: "auto", height: "100vh" , marginTop:"-20px"}}
            id="skills"
          >
            <Center>
              <Heading
                as="h1"
                size="4xl"
                noOfLines={1}
                style={{ marginTop: "90px", padding: "20px", }}
              >
                My <span>Technical</span> Skills
              </Heading>
            </Center>
            <br />
            <br />
            <SimpleGrid minChildWidth="150px" spacing="60px" mt="10px">
              {techStack.map((el) => {
                return (
                  <Box 
                    style={{
                      padding: "-20px", 
                      }}
                  >
                    <div className={Styles.framework}  key={el.id} 
                    >
                      <img src={el.link} alt="" />
                      <br />
                      <Center><p>{el.name}</p></Center>
                    </div>
                  </Box>
                );
              })}
            </SimpleGrid>
          </div>
        </div>
      ) : (
        <div>
          <br />
          <br />
          <br />
          <div style={{ width: "90%", margin: "auto" }} id="skills">
            <Center>
              <Heading
                as="h1"
                size="xl"
                noOfLines={1}
              // style={{ marginTop: "350px" }}
              >
                My <span>Technical</span> Skills
              </Heading>
            </Center>
            <br />
            <br />

            <SimpleGrid minChildWidth="150px" spacing="20px" mb="40px">
              {techStack.map((el) => {
                return (
                  <Box
                    style={{
                      padding: "20px",
                      
                    }}
                  >
                    <div style={{dispay:"grid"}} className={Styles.framework}>
                      <img src={el.link} alt="Skils" />
                      <br />
                      <Center><Text >{el.name}</Text></Center>
                    </div>
                  </Box>
                );
              })}
            </SimpleGrid>
          </div>
        </div>
      )}
    </div>
  );
};
    
  


export default Skills
