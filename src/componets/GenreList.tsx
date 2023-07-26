import { Button, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data,loading } = useGenre();
  if (loading) return <Spinner padding={20} />;
  return (
    <List spacing={3} paddingLeft={8} >
      {data.map((genre) => (
        <ListItem  key={genre.id} display={"flex"} alignItems={"center"}>
          <Image marginRight={2} boxSize={8} src={genre.image_background} borderRadius={10} />
          <Button variant={"link"} fontSize={"lg"} onClick={()=> console.log(genre.name)} >{genre.name}</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
