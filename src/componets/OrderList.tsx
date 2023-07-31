import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronBarDown } from "react-icons/bs";
interface Props {
  onSelect: (selectedOption: string | null) => void;
}

const OrderList = ({ onSelect }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const menuOptions = [
    { value: '', label: "Default" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released" },
    { value: "-added", label: "Added" },
    { value: "created", label: "Created" },
    { value: "rating", label: "Rating" },
    { value: "-metacritic", label: "Metacritic" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Sort By: {selectedOption || "Select Option"}
      </MenuButton>
      <MenuList>
        {menuOptions.map((o) => (
          <MenuItem
            onClick={() => {
              setSelectedOption(o.value);
              onSelect(o.value);
            }}
            key={o.value}
          >
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderList;
