import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Input,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
  useColorMode,
  useDisclosure,
  VStack,
  
} from "@chakra-ui/react";

import pdf from "../Assets/Lalit Pawar-Resume.pdf";
import { FaSun, FaMoon } from "react-icons/fa";
import Style from "./Navbar.module.css";
import { useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";


function Navbar() {
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
        bgColor={isDark ? "gray.800" : "white"}
        borderBottom="1px"
        borderColor="gray.100"
        h="60px"
      >
        {/* <Social /> */}
        <Spacer />

        <Flex px="20px" align="center">
          <HStack
            w="55vw"
            display="flex"
            justifyContent="space-evenly"
            fontWeight="semibold"
            letterSpacing="3px"
            fontSize={"25px"}
           >
            <Link
              to="/"
              
            >
              HOME
            </Link>
            <Link
              to="/about"
              smooth={true}
              duration={0}
              spy={true}
              offset={-80}
              
            >
              ABOUT
            </Link>

            <Link
              to="/projects"
              smooth={true}
              duration={0}
              spy={true}
              offset={-40}
             
            >
              PROJECTS
            </Link>


            <Link
              to="/skills"
              smooth={true}
              duration={0}
              spy={true}
              offset={-40}
              
            >
              SKILLS
            </Link>
           
            <Link
              to="/contact"
              smooth={true}
              duration={0}
              spy={true}
              offset={-80}
             
            >
              CONTACT
            </Link>
            <a href={pdf} download>
                        <Button >
                          RESUME
                        </Button>
                      </a>
          </HStack>
          <IconButton
            ml="10px"
            isRound
            icon={isDark ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </HStack>

      <HStack
        px="10px"
        h="60px" 
        alignItems={"center"}
        display={["flex", "flex", "flex", "none"]}
        zIndex={10}
        position="sticky"
        top="0"
        left="0"
         overflow="visible"
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
          ml="-50px"
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
              <a href={pdf} download>
                        <Button colorScheme="red" style={{ marginTop: "20px" }}>
                          RESUME
                        </Button>
                      </a>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;