import { Box, Center, Text } from "@chakra-ui/react";
import Navbar from "@/components/widgets/navbar/Navbar";
import Footer from "@/components/widgets/footer/Footer";
import HomeSellerMockup from "@/components/views/home/HomeSellerMockup";
import HomeSeller from "@/components/views/home/HomeSeller";
import HomeBuyerMockup from "@/components/views/home/HomeBuyerMockup";
import HomeBuyer from "@/components/views/home/HomeBuyer";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <HomeSellerMockup />
      <HomeSeller />
      <HomeBuyerMockup />
      <HomeBuyer />
      <Box height={"200px"} />
      <Footer />
    </Box>
  );
}
