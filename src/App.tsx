import { Grid, GridItem,Show } from "@chakra-ui/react";
import Navbar from "./componets/Navbar";
import GameGrid from "./componets/GameGrid";
import GenreList from "./componets/GenreList";
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main" `,
      }}
      templateColumns={{
        base : '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" paddingTop={8} >
        <GenreList />
      </GridItem>
      </Show>
      <GridItem area="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
