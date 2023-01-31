import { Box,Center,Heading,HStack,Image,Img, ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react';
import prof from "../Assets/LalitProfile.JPG";
import GitHubCalendar from 'react-github-calendar';

const About = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    level4: "#125425",
    level3: "#228f41",
    level2: "#31a851",
    level1: "#66cc78",
    level0: "#d6d6d6"
  };
  return (
    <>
        <Box  mt="20px" id="about"
        >
        <Heading textAlign="center" lineHeight={"2.5"} fontSize="6xl" fontWeight={"bold"} ml="20px" mt="-40px" >My Profile</Heading>

        <Box  display={"flex"} flexDirection={["column","column","column","row"]} 
         justifyContent={"space-evenly"}  alignItems={"center"} w="100%" m="auto">

        <Box mt="20px" mr={["-10px","10px","-10px","-80px"]}  p="15px">
            <Img src={prof} alt="img" borderRadius='30px'   
              boxShadow= "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
              h="360px"
           />
        </Box>

        <Box lineHeight={"1.7"} p="15px" fontSize={"20px"}  w={["80%","80%","60%","50%"]} ml={["20px","20px","10px","-40px"]} mt="20px"
          webkitBackgroundClip= "text"
          WebkitTextFillColor= "transparent"
          backgroundSize= "250%"
          transition= "500ms background-position"
          boxShadow= "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"

          >
            <UnorderedList >
                <ListItem>I am a full stack web developer with a vast array of knowledge in frontend and backend languages,responsive 
                frameworks,database and best code practices.</ListItem>
                {/* <ListItem>I successfully completed Mechanical Engineering from R.C.Patel Institute of Technology,Shirpur.</ListItem>  */}
                <ListItem>My objective is simply to be best web developer that I can be and to contribute to the technology industry.</ListItem> 
                <ListItem>I am dedicated to perfecting my craft by learning from more seasoned developers,remaining humble and continuously strides 
                to learn all that I can about developement.</ListItem>
                <ListItem>I studied Mathematics and I believe that my understanding of problem solving and complex algorithms are also skills 
                that have and will continue to contribute to my overall success as a developer.</ListItem>
            </UnorderedList>
        </Box>
    </Box>
    </Box>

    <HStack p={2} justify="center" data-aos="fade-up" mb="20px" mt="30px">
          <SimpleGrid columns={[1, 1, 2, 2]} spacing={5} 
              boxShadow= "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" p="15px"
              >
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-1.svg"
                alt="icon"
              />
              <Text
                fontWeight={"medium"}
                letterSpacing="2px"
              >
                1200+ Hours Practical Coding
              </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-2.svg"
                alt="icon"
              />
              <Text
                // fontWeight={isDark ? "thin" : "hairline"}
                fontWeight={"medium"}
                letterSpacing="2px"
              >
                300+ Hours Data Structures & Algorithms
              </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-3.svg"
                alt="icon"
              />
              <Text
                fontWeight={"medium"}
                letterSpacing="2px"
              >
                100+ Hours Soft Skill Development
              </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-4.svg"
                alt="icon"
              />
              <Text
                fontWeight={"medium"}
                letterSpacing="2px"
              >
                100+ Hours Math & Logic
              </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-5.svg"
                alt="icon"
              />
              <Text
                fontWeight={"medium"}
                letterSpacing="2px"
              >
                80+ Mini Projects
              </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-6.svg"
                alt="icon"
              />
              <Text
                fontWeight={"medium"}
                letterSpacing="2px"
              >
                10+ Projects{" "}
              </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                rounded="10px"
                src="https://git-scm.com/images/logos/logomark-orange@2x.png"
                alt="git-commit"
              />
              <Text
                fontWeight={"medium"}
                letterSpacing="2px"
              >
                120+ Git Commits
              </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                rounded="10px"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="git-commit"
              />
              <Text
                fontWeight={"medium"}
                letterSpacing="2px"
              >
                120+ Contributions in the last year
              </Text>
            </HStack>
            </SimpleGrid>
        </HStack>

        <hr style={{height:"10px",backgroundColor:"gray",marginTop:"50px"}}/>
    
    <Heading textAlign="center" lineHeight={"2.5"} fontSize={["20px","30px","30px","50px"]} fontWeight={"bold"} ml="20px" mt="30px" >
    My Github Calender</Heading>
    <Center mt="30px" 
              boxShadow= "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" p="15px"
               >
        <GitHubCalendar username="lalitUnstopable" year={new Date().getFullYear()}/>
    </Center><br /><br />
       
        <Heading textAlign="center" lineHeight={"2.5"} fontSize={["20px","30px","30px","50px"]} fontWeight={"bold"} ml="20px" mt="30px" mb="20px">My Github Stats</Heading>
        <div style={{width:"100%",margin:"auto",marginBottom:"20px",display:"flex",flexDirection:"column",gap:"10px"}}
         >
        <Image 
              boxShadow= "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" p="15px"
              align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=lalitUnstopable&theme=react&hide_border=false" alt="" w={["90%","90%","90%","50%"]} m="auto"/> 
        <Image 
              boxShadow= "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" p="15px"
              align="center" src="https://github-readme-stats.vercel.app/api?username=lalitUnstopable&theme=react&hide_border=false&show_icons=true&locale=en" alt="" w={["90%","90%","90%","50%"]} m="auto"/> 
        <Image 
              boxShadow= "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" p="15px"
              align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=lalitUnstopable&theme=react&hide_border=false&include_all_commits=true&layout=compact" alt="" w={["90%","90%","90%","50%"]} m="auto"/> 
       </div>
    </>
  )
}

export default About;