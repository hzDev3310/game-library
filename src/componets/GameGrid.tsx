import { Grid, SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
const {games , err} = useGame();
 return (
  <>
    {err && <p>{err}</p>}
    {games && games.length > 0 ? (
      <SimpleGrid columns={{sm:1, lg : 2 , xl :3}}  spacing={10} padding={10} >
        {games.map((i) => (
          <GameCard key={i.id} game={i} />
        ))}
      </SimpleGrid>
    ) : (
      <p>Loading...</p>
    )}
  </>
);

};

export default GameGrid;