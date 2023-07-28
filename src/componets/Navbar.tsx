import {
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingY={"10px"} paddingX={15}>
      <Image src={logo} boxSize={"50px"} />
      <InputGroup >
        <InputLeftElement pointerEvents="none">
          <IconButton
            as={FaSearch}
            aria-label="Search Icon"
            boxSize={5}
            background={"none"}
          />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search"
          borderRadius="full"
          _placeholder={{ color: "gray.500" }}
        />
      </InputGroup>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
