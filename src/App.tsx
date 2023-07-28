import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import Navbar from "./componets/Navbar";
import GameGrid from "./componets/GameGrid";
import GenreList from "./componets/GenreList";
import PlatformsList from "./componets/PlatformsList";

import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/usePlatforms";
import OrderList from "./componets/OrderList";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<null | Genre>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<null | Platform>(
    null
  );
  const [selectedOrder, setSelectedOrder] = useState<null | string>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main" `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "260px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingTop={8}>
          <GenreList genre={(selected) => setSelectedGenre(selected)} />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={8}>
        <HStack paddingTop={8} >
          <PlatformsList platform={(p) => setSelectedPlatform(p)} />

          <OrderList onSelect={(o) => setSelectedOrder(o)} />
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedOrder={selectedOrder}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
