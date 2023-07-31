import {
  Badge,
  Button,
  Icon,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import { FaHome } from "react-icons/fa";
interface Props {
  genre: (selected: Genre |null) => void;
}

const GenreList = ({ genre }: Props) => {
  const { data, isLoading} = useGenre();
  if (isLoading) return <Spinner padding={20} />;
  return (
    <List spacing={3} paddingLeft={8}>
      <ListItem display={"flex"} alignItems={"center"}>
        <Badge
          padding={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={13}
          boxSize={8}
          borderRadius={10}
          fontWeight={"bold"}
        >
          <Icon boxSize={5} as={FaHome} />
        </Badge>
        <Button variant={"link"} fontSize={"lg"} onClick={() => genre(null)}>
          All
        </Button>
      </ListItem>
      {data?.results.map((genreItem) => (
        <ListItem key={genreItem.id} display={"flex"} alignItems={"center"}>
          <Image
            marginRight={2}
            boxSize={8}
            src={genreItem.image_background}
            borderRadius={10}
          />
          <Button
            variant={"link"}
            fontSize={"lg"}
            onClick={() => {
              genre(genreItem);
            }}
          >
            {genreItem.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
