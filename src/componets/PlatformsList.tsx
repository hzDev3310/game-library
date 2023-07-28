import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  platform: (selected: Platform | null) => void;
}

const PlatformsList = ({ platform }: Props) => {
  const { data } = usePlatforms();
  const [title, setTitle] = useState("Platforms");
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {title}
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            setTitle("Platforms");
            platform(null);
          }}
        >
          
          All
        </MenuItem>
        {data.map((p) => (
          <MenuItem
            onClick={() => {
              setTitle(p.name);
              platform(p);
            }}
            key={p.id}
          >
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsList;
