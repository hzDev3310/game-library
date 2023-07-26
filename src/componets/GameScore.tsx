import { Badge } from "@chakra-ui/react";
import { useEffect, useState } from "react";


interface Props {
  score: number;
}

const GameScore = ({ score }: Props) => {
  const [color, setColor] = useState<string>("green");

  useEffect(() => {
    if (score > 50) {
      setColor("green.300");
    } else {
      setColor("red");
    }
  }, [score]);

  return (
    <Badge
      
      padding={1}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={13}
      width={8}
      height={8}
      borderRadius={10}
      fontWeight={"bold"}
      color={color}
    >
      {score}
    </Badge>
  );
};

export default GameScore;
