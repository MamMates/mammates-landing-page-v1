import {
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";
import React from "react";

const HomeBuyerMockup = () => {
  return (
    <Flex>
      <Box></Box>
      <Box>
        <Image alt="Mockup App" src={"/assets/img/mockup_buyer.png"} />
      </Box>
    </Flex>
  );
};

export default HomeBuyerMockup;
