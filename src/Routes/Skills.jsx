import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Heading,
  Center,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
const Skills = () => {
  
      const techStack = [
    {
      id: 1,
      name: "TypeScript",
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      id: 2,
      name: "Express",
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    },

    {
      id: 3,
      name: "NodeJS",
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },

    // { name: "Flutter", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg" },
    // { name: "React Native", link: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png" },
    {
      id: 5,
      name: "HTML",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 6,
      name: "CSS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    },
    {
      id: 7,
      name: "Chakra UI",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGp4_Tbfbq_a6vR95i0We9VhPLDl5rDtlug&usqp=CAU",
    },
    {
      id: 8,
      name: "Redux",
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },

    {
      id: 9,
      name: "Javascript",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },

    {
      id: 10,
      name: "React",
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },

    {
      id: 11,
      name: "Mongo DB",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    },

    // { name: "Azure", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-plain.svg" },
    {
      id: 13,
      name: "Git",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    },
    // {
    //   name: "Firebase",
    //   link: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    // },

    {
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
            <SimpleGrid minChildWidth="130px" spacing="70px">
              {techStack.map((el) => {
                return (
                  <Box
                    style={{
                      padding: "20px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
                     
                    }}
                  >
                    <div>
                      <img src={el.link} alt="" />
                      <br />
                      <Center><Text>{el.name}</Text></Center>
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

            <SimpleGrid minChildWidth="130px" spacing="40px" mb="40px">
              {techStack.map((el) => {
                return (
                  <Box
                    style={{
                      padding: "20px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
                      // boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                     // boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    //  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                    // boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                    // boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
                    // boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"
                   // boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
                    }}
                  >
                    <div style={{dispay:"grid"}}>
                      <img src={el.link} alt="Skils" />
                      <br />
                      <Center><Text>{el.name}</Text></Center>
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
