import { linkRedirection } from "@/components/utils/linkRedirection";
import {
  Box,
  Stack,
  Image,
  Text,
  HStack,
  Link,
  Flex,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bgColor={"#256C2C"} py={"32px"} px={{ base: "2rem", md: "10%" }}>
      <Stack align={"center"} color={"white"} spacing={"24px"}>
        <Stack align={"center"} spacing={"16px"}>
          <Box py={"20px"}>
            <Image
              alt=""
              src="/assets/img/logo.svg"
              height={"80px"}
              filter={"brightness(0) invert(1)"}
            />
          </Box>
          <Text fontSize={"xs"} textAlign={"center"} maxW={"415px"}>
            {'"'}In every dish, find a tale of flavors. Embrace the art of
            saving food, sharing hope.
            {'"'}
          </Text>
        </Stack>

        <SimpleGrid
          width={"100%"}
          justifyContent={"center"}
          display={"flex"}
          flexWrap={"wrap"}
          spacing={"24px"}
          color={"whiteAlpha.800"}
          fontSize={"xs"}
        >
          <Link href={"#seller"}>Seller</Link>
          <Link href={"#buyer"}>Buyer</Link>
        </SimpleGrid>
        <Box width={"100%"} borderTop={"1px"} borderColor={"whiteAlpha.800"} />
        <Flex
          justify={"space-between"}
          flexDirection={{ base: "column", sm: "row" }}
          width={"100%"}
        >
          <HStack mb={{ base: "20px", sm: 0 }}>
            <Icon
              _hover={{
                color: "whiteAlpha.800",
                cursor: "pointer",
              }}
              transition={"all 0.05s"}
              as={FaGithub}
              boxSize={"23px"}
              onClick={() => {
                linkRedirection("https://github.com/MamMates");
              }}
            />
          </HStack>
          <Text fontSize={"sm"}>
            <Text as={"span"} fontWeight={"bold"}>
              © MamMates{" "}
            </Text>
            All Rights Reserved. Website by{" "}
            <Text as={"span"} fontWeight={"bold"}>
              Team CH2-PS297 2023.
            </Text>
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Footer;
