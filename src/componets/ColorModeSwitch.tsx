import { Flex, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex minWidth={120} justifyContent={"space-between"} alignItems={"center"}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />

      <Text>dark mode</Text>
    </Flex>
  );
};

export default ColorModeSwitch;
