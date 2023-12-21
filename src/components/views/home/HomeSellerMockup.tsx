import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const HomeSellerMockup = () => {
  return (
    <Flex>
      <Box></Box>
      <Box>
        <Image alt="Mockup App" src={"/assets/img/mockup_seller.png"} />
      </Box>
    </Flex>
  );
};

export default HomeSellerMockup;
