import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameLoading from "./GameLoading";

const GameGrid = () => {
  const { games, err, loading } = useGame();
  const ske = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {err && <p>{err}</p>}

      <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} spacing={10} padding={10}>
        {loading && ske.map(() => <GameLoading></GameLoading>)}
        {games.map((i) => (
          <GameCard key={i.id} game={i} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
