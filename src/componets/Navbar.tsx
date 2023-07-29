import {
  HStack,
  Image,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchbar from "./Searchbar";
interface Props  {
   searchValue :(value : string)=> void
}
const Navbar = ({searchValue}: Props) => {
  return (
    <HStack justifyContent={"space-between"} paddingY={"10px"} paddingX={15}>
      <Image src={logo} boxSize={"50px"} />
      <Searchbar searchValue={(e)=>searchValue(e)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
