import { linkRedirection } from "@/components/utils/linkRedirection";
import { Box, Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const HomeSeller = () => {
  return (
    <Box id="seller" px={{ base: 10, md: "10%" }}>
      <Center>
        <Stack maxWidth={"800px"} textAlign={"center"} spacing={"50px"}>
          <Stack spacing={"20px"}>
            <Heading>
              Empower Your Culinary Business with MamMates Seller App
            </Heading>
            <Text>
              Transform your culinary venture into a thriving business! Dive
              into the MamMates Seller App – a powerhouse designed for sellers
              like you. Download now to effortlessly manage your store, update
              offerings, and connect with a community of food enthusiasts.
              Elevate your selling experience with MamMates – where every
              download opens the door to culinary success.
            </Text>
          </Stack>
          <Box
            onClick={() => {
              linkRedirection(
                "https://drive.google.com/drive/folders/1Bt6sU5F2Td1RQMCLEVdgyxcpxaa5VTry?usp=drive_link"
              );
            }}
          >
            <Button colorScheme={"green"}>Download Seller Application</Button>
          </Box>
        </Stack>
      </Center>
    </Box>
  );
};

export default HomeSeller;
