
import {Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HStack, IconButton,Spacer, useColorMode, useDisclosure, VStack } from '@chakra-ui/react';
import { FaSun, FaMoon } from "react-icons/fa";
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';
import Style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

let links = [
    {"path":"/", title:"Home"},
    {"path":"/about", title:"About"},
    {"path":"/skills", title:"Skills"},
    {"path":"/projects", title:"Projects"},
    {"path":"/contact", title:"Contact"}
]

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const isDark = colorMode === "dark";

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

  return (
 
    <>
   <HStack 
        display={["none", "none", "none", "flex"]}
        zIndex={10}
        position="sticky"
        top="0"
        bgColor={isDark ? "lightgray" : "white"}
        borderBottom="1px"
        borderColor="gray.100"
        h="60px" 
    >
    <Spacer />
    <Flex justifyContent={"space-evenly"} gap="40px" >
    
      { 
        links.map((link)=>{
            return (
                <NavLink 
                  className={({isActive}) => {
                    return isActive ? Style.active : Style.default;
                  }}
                  key = {link.path}
                  to={link.path}
                  
                > {link.title}
                 </NavLink>
            )
        })
     }
                    <IconButton 
                    isRound={true}
                    icon={isDark ? <FaSun /> : <FaMoon />}
                    onClick={toggleColorMode}
                    />
     </Flex>
    </HStack>

     <HStack
        px="10px"
        h="60px" 
        borderBottom="1px"
        borderColor="gray.100"
        alignItems={"center"}
        display={["flex", "flex", "flex", "none"]}
      
      >
        <IconButton
          aria-label="Open Menu"
          mr={2}
          size="md"
          onClick={onOpen}
          isRound={true}
          icon={<HamburgerIcon />}
         
        />
        <Spacer />
        {/* <Social /> */}
        <IconButton
          ml="10px"
          isRound
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        />
      </HStack>

      <Drawer
        size={["xs", "xs"]}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
       >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
           <DrawerBody>
            <VStack align="left" spacing={5}>
              <Link to="/">
                HOME
              </Link>
              <Link to="/about">
                ABOUT
              </Link>
              <Link to="/skills">
                SKILLS
              </Link>
              <Link to="/projects">
                PROJECTS
              </Link>
              <Link to="contact">
                CONTACT
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </>   
  )
}

export default Navbar