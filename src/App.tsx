import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./componets/Navbar";
import GameGrid from "./componets/GameGrid";
import GenreList from "./componets/GenreList";
import { useState } from "react";
const App = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main" `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "220px 1fr",
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
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
