import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameLoading from "./GameLoading";

import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const ske = [1, 2, 3, 4, 5, 6];
  console.log(data?.results)
  return (
    <>
      {error && <p>{error.message }</p>}

      <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} spacing={10} paddingTop={5}>
        {isLoading && ske.map((i) => <GameLoading key={i}></GameLoading>)}

        {data?.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
