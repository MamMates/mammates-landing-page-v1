import { Box } from "@chakra-ui/react";
import Navbar from "@/components/widgets/navbar/Navbar";
import Footer from "@/components/widgets/footer/Footer";
import HomeSellerMockup from "@/components/views/home/HomeSellerMockup";
import HomeSeller from "@/components/views/home/HomeSeller";
import HomeBuyerMockup from "@/components/views/home/HomeBuyerMockup";
import HomeBuyer from "@/components/views/home/HomeBuyer";
import Head from "next/head";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Saving food, Sharing hope</title>
        <meta
          name="description"
          content="Welcome to MamMates – your gateway to a vibrant culinary universe. Explore unique dishes, connect with passionate sellers, and savor a personalized food journey. Whether you're a discerning buyer or an aspiring seller, MamMates is where culinary dreams come to life. Join us in the joy of saving food and sharing hope. Experience more than just a marketplace; experience a community united by the love of good food."
        />
      </Head>
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
