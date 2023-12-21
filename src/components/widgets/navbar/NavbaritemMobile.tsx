import navigate from "@/components/utils/navigate";
import { Box, Button, Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";

type props = {
  children?: React.ReactNode;
  path: string;
};

export default function NavbaritemMobile({ children, path }: props) {
  const router = useRouter();
  return (
    <Box display={"grid"} placeItems={"center"}>
      <Button
        width={"100vw"}
        my={"5px"}
        variant={"unstyled"}
        color={"black"}
        onClick={() => {
          navigate(router, path);
        }}
      >
        {children}
      </Button>
      <Divider />
    </Box>
  );
}
