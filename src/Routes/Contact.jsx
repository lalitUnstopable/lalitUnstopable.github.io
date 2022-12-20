import React from "react";
import { useState, useEffect } from "react";

import {
  Stack,
  Box,
  Wrap,
  WrapItem,
  Center,
  Text,
  Heading,
  Button,
  Image,
  UnorderedList,
  List,
  ListItem,
  Input,
  Textarea,
  background,
  Flex,
} from "@chakra-ui/react";

const Contact = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1050);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1050);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <div
          style={{
            // height: "100vh",
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div id="contact">
            <Center display="flex" flexDirection={"column"} >
              <Heading fontSize="60px"  mt="40px">
               My Contact
              </Heading>
              <Heading as="h2" size="xl" mt="40px" color="grey">
               LALIT PAWAR
              </Heading>
              <Heading as="h2" size="xl" mt="40px" color="grey">
              9766922240
              </Heading>
              <Heading as="h2" size="xl" mt="40px" color="grey">
              lalitpawar229@gmail.com
              </Heading>
            </Center>
            <br />

            <br />

            <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                  py={4}
                  gap="10"
                >
                 
                  <a href="https://www.linkedin.com/in/lalit-pawar-1b5525214/">
                    <Button
                      leftIcon=<Image
                        boxSize="30px"
                        objectFit="cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAN-WE7H5Vn-6zGHmOylcv60FMyI_TDdq2Dv_3XHZWynICvKyczqbOceHfdHYtzSPQEA&usqp=CAU"
                        alt="Dan Abramov"
                      />
                      colorScheme="blue"
                      variant="solid"
                      p="30px"
                      fontSize={"30px"}
                    >
                      LinkedIn
                    </Button>
                  </a>
                  <a href="https://github.com/lalitUnstopable">
                    <Button
                      leftIcon=<Image
                      boxSize="30px"
                        objectFit="cover"
                        src="data:image/png;base64,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"
                        alt="Dan Abramov"
                      />
                      backgroundColor="black"
                      color="white"
                      variant="solid"
                      p="30px"
                      fontSize={"30px"}
                    >
                      Github
                    </Button>
                  </a>

                  <a href="https://mail.google.com/mail/u/0/#inbox">
                    <Button
                      leftIcon=<Image
                      boxSize="30px"
                        objectFit="cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAE84FoGXi40vo1sEHdLCFIZpflZ1n4Wn4qA&usqp=CAU"
                        alt="Dan Abramov"
                      />
                      colorScheme="orange"
                      variant="solid"
                      p="30px"
                      fontSize={"30px"}
                    >
                      Gmail
                    </Button>
                  </a>
                </Box>

            
               
          </div>
        </div>
      ) : (
        <div style={{ width: "70%", margin: "auto" }}>
         
          <div id="contact">
            
          <Center display="flex" flexDirection={"column"} justifyContent="center">
              <Flex fontSize="60px"  mt="40px" as="b" flexDirection={"column"}  textAlign={"center"} >
               My Contact
              </Flex>
              <Heading as="h2" size="xl" mt="40px" color="grey">
               LALIT PAWAR
              </Heading>
              <Heading as="h2" size="xl" mt="40px" color="grey">
              9766922240
              </Heading>
              <Heading as="h2" size="xl" mt="40px" color="grey">
              lalitpawar229@gmail.com
              </Heading>
            </Center>
            <br />

            <br />

            <Box
                  display="flex"
                  flexDirection={"column"}
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                  py={4}
                  gap="10"
                >
                 
                  <a href="https://www.linkedin.com/in/lalit-pawar-1b5525214/">
                    <Button
                      leftIcon=<Image
                        boxSize="30px"
                        objectFit="cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAN-WE7H5Vn-6zGHmOylcv60FMyI_TDdq2Dv_3XHZWynICvKyczqbOceHfdHYtzSPQEA&usqp=CAU"
                        alt="Dan Abramov"
                      />
                      colorScheme="blue"
                      variant="solid"
                      p="30px"
                      fontSize={"30px"}
                    >
                      LinkedIn
                    </Button>
                  </a>
                  <a href="https://github.com/lalitUnstopable">
                    <Button
                      leftIcon=<Image
                      boxSize="30px"
                        objectFit="cover"
                        src="data:image/png;base64,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"
                        alt="Dan Abramov"
                      />
                      backgroundColor="black"
                      color="white"
                      variant="solid"
                      p="30px"
                      fontSize={"30px"}
                    >
                      Github
                    </Button>
                  </a>

                  <a href="https://mail.google.com/mail/u/0/#inbox">
                    <Button
                      leftIcon=<Image
                      boxSize="30px"
                        objectFit="cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAE84FoGXi40vo1sEHdLCFIZpflZ1n4Wn4qA&usqp=CAU"
                        alt="Dan Abramov"
                      />
                      colorScheme="orange"
                      variant="solid"
                      p="30px"
                      fontSize={"30px"}
                    >
                      Gmail
                    </Button>
                  </a>
                </Box>
           

             
         
          
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;