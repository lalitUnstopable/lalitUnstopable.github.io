import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
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

import pdf from "../Assets/Lalit-Pawar-Resume.pdf";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
import { useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

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
            w="50vw"
            display="flex"
            justifyContent="space-evenly"
            fontWeight="semibold"
            letterSpacing="3px"
          >
            <Link
              to="home"
              smooth={true}
               duration={0}
              spy={true}
              offset={-120}
              activeClass={styles.active}
            >
              HOME
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={0}
              spy={true}
              offset={-80}
              activeClass={styles.active}
            >
              ABOUT
            </Link>

            <Link
              to="project"
              smooth={true}
              duration={0}
              spy={true}
              offset={-40}
              activeClass={styles.active}
            >
              PROJECTS
            </Link>


            <Link
              to="skills"
              smooth={true}
              duration={0}
              spy={true}
              offset={-40}
              activeClass={styles.active}
            >
              SKILLS
            </Link>
           
            <Link
              to="contact"
              smooth={true}
              duration={0}
              spy={true}
              offset={-80}
              activeClass={styles.active}
            >
              CONTACT
            </Link>
            {/* <a href={pdf} color="orange"> */}
                        <Button color={"black"} onClick={()=>
                          window.open(
                           "https://drive.google.com/file/d/1WsvJapVgFgX-W-6aiOt1IqSWPBGR3Aep/view?usp=share_link"
                          )
                        }>
                          RESUME
                        </Button>
                      {/* </a> */}
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
        borderBottom="1px"
        borderColor="gray.100"
        display={["flex", "flex", "flex", "none"]}
        zIndex={10}
        position="sticky"
        top="0"
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
        <IconButton
          ml="10px"
          isRound
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}/>
      </HStack>

      <Drawer
        size={["xs", "xs"]}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <VStack align="left" spacing={5}>
              <Link
                to="home"
                smooth={true}
                duration={0}
                spy={true}
                activeClass={styles.active}
              >
                HOME
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={0}
                spy={true}
                 offset={50}
                activeClass={styles.active}
              >
                ABOUT
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={0}
                spy={true}
                 offset={50}
                activeClass={styles.active}
              >
                SKILLS
              </Link>
              <Link
                to="project"
                smooth={true}
                duration={0}
                spy={true}
                // offset={50}
                activeClass={styles.active}
              >
                PROJECTS
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={0}
                spy={true}
                // offset={50}
                activeClass={styles.active}
              >
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


