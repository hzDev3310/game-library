import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameLoading from "./GameLoading";

interface Props {
  selectedGenre: string;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, err, loading } = useGame();
  const ske = [1, 2, 3, 4, 5, 6];

  // Filter the data by the selected genre if it's not empty, otherwise return all data
  const filteredData = selectedGenre
    ? data.filter((game) =>
        game.genres.some((genre) => genre.name === selectedGenre)
      )
    : data;

  return (
    <>
      {err && <p>{err}</p>}

      <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} spacing={10} padding={10}>
        {loading &&
          ske.map((i) => <GameLoading key={i}></GameLoading>)}

        {filteredData.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
