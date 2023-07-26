
import {HStack,Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
   <HStack justifyContent={"space-between"} paddingInline={"20px"}>
    <Image src={logo}  boxSize={'50px'}/>
   <ColorModeSwitch></ColorModeSwitch>
   </HStack>
  )
}

export default Navbar