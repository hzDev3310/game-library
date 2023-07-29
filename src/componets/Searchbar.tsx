import {
  InputGroup,
  InputLeftElement,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";
interface Props {
  searchValue: (value: string) => void;
}

const Searchbar = ({ searchValue }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
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
        variant={'filled'}
        ref={ref}
        type="text"
        placeholder="Search"
        borderRadius="full"
        width={'full'}       
        onInput={()=>searchValue(ref.current!.value.toString())}
      />

    </InputGroup>
  );
};

export default Searchbar;
