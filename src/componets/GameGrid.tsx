import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameLoading from "./GameLoading";

import { GameQuery } from "../App";

interface Props {
  gameQuery : GameQuery
}

const GameGrid = ({
  gameQuery
}: Props) => {
  const { data, err, loading } = useGame(
    gameQuery
  );
  const ske = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {err && <p>{err}</p>}

      <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} spacing={10} paddingTop={5}>
        {loading && ske.map((i) => <GameLoading key={i}></GameLoading>)}

        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
