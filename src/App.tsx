import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import Navbar from "./componets/Navbar";
import GameGrid from "./componets/GameGrid";
import GenreList from "./componets/GenreList";
import PlatformsList from "./componets/PlatformsList";
import OrderList from "./componets/OrderList";

import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/usePlatforms";
import GameHeadding from "./componets/GameHeadding";

export interface GameQuery {
  genre: Genre | null;
  platfrom: Platform | null;
  order: string | null;
  searchValue: string;
}

const App = () => {

  const [gameQuery , setGameQuery] = useState<GameQuery>({}as GameQuery)

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main" `,}}
      templateColumns={{ base: "1fr",  lg: "260px 1fr", }}
    >
      <GridItem area="nav">
        <Navbar searchValue={(searchValue) =>setGameQuery({...gameQuery,searchValue})} />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingTop={8}>
          <GenreList genre={(genre) => setGameQuery({...gameQuery,genre})} />
        </GridItem>
      </Show>

      <GridItem area="main" paddingX={8}>
        <GameHeadding gameQuery={gameQuery} ></GameHeadding>
        <HStack paddingTop={8}>
          <PlatformsList platform={(platfrom)=>setGameQuery({...gameQuery,platfrom})} />
          <OrderList onSelect={(order) =>setGameQuery({...gameQuery,order})} />
        </HStack>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
};

export default App;
