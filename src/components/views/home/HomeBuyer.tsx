import { linkRedirection } from "@/components/utils/linkRedirection";
import { Box, Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const HomeBuyer = () => {
  return (
    <Box id="buyer" px={{ base: 10, md: "10%" }}>
      <Center>
        <Stack maxWidth={"800px"} textAlign={"center"} spacing={"50px"}>
          <Stack spacing={"20px"}>
            <Heading>
              Savor Every Bite and Unleash Culinary Bliss with MamMates Buyer
              App
            </Heading>
            <Text>
              Embark on a delightful culinary journey with the MamMates Buyer
              App. Download now to immerse yourself in a world of delectable
              dishes, personalized recommendations, and seamless food discovery.
              Connect with passionate sellers, discover unique flavors, and
              elevate your dining experience to new heights. Join MamMates –
              where every download brings you closer to a palate-pleasing
              adventure filled with gastronomic wonders.
            </Text>
          </Stack>
          <Box>
            <Button
              colorScheme={"green"}
              onClick={() => {
                linkRedirection(
                  "https://drive.google.com/drive/folders/1Bt6sU5F2Td1RQMCLEVdgyxcpxaa5VTry?usp=drive_link"
                );
              }}
            >
              Download Buyer Application
            </Button>
          </Box>
        </Stack>
      </Center>
    </Box>
  );
};

export default HomeBuyer;
