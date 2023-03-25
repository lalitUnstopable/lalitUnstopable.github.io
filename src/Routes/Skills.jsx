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
      link: "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png",
    },
    {
      id: 5,
      name: "Redux",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABXPUzIiiKfjxkWq9of65KP8nGkN5YzuEdowc8kxTjLAQ13KCUylih0r3dra5tmjeQ5Y&usqp=CAU",
    },
    {
      id: 6,
      name: "NodeJs",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_6Bm27JjO0xgsT6ocfW920lxBrh1bK5fFZW0gU5vLBjOHa7Xm3UWI-OUyTI5hj7SDpI&usqp=CAU",
    },
    {
      id: 7,
      name: "ExpressJs",
      link: "https://blog.logrocket.com/wp-content/uploads/2020/12/express-middlewares-complete-guide.png",
    },
    {
      id: 8,
      name: "Mongo DB",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
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
                size="3xl"
                noOfLines={1}
                style={{ marginTop: "90px", padding: "20px", }}
              >
                My Technical Skills
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
                size="3xl"
                textAlign={"center"}
                lineHeight="1.2"
              >
                My Technical Skills
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
