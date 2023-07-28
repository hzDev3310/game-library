import useData from "./useDate";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatforms";

export interface Game {
  released: string | number | Date;
  added: string | number | Date;
  created: string | number | Date;
  updated: string | number | Date;
  rating: number;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

const useGame = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  sortBy: string | null
) => {
  const { data, err, loading } = useData<Game>("/games");

  // Filter the data based on the selectedGenre
  const filteredByGenre = selectedGenre
    ? data.filter((game) =>
        game.genres.some((genre) => genre.id === selectedGenre.id)
      )
    : data;

  // Filter the data further based on the selectedPlatform
  const filteredByPlatform = selectedPlatform
    ? filteredByGenre.filter((game) =>
        game.parent_platforms.some(
          (platformData) => platformData.platform.id === selectedPlatform.id
        )
      )
    : filteredByGenre;

  const sortData = (dataArray: Game[], sortBy: string | null) => {
    if (!sortBy) return dataArray;

    return dataArray.slice().sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "released":
          return (
            new Date(a.released).getTime() - new Date(b.released).getTime()
          );
        case "added":
          return new Date(a.added).getTime() - new Date(b.added).getTime();
        case "created":
          return new Date(a.created).getTime() - new Date(b.created).getTime();
        case "updated":
          return new Date(a.updated).getTime() - new Date(b.updated).getTime();
        case "rating":
          return b.rating - a.rating; // Sort by rating in descending order
        case "metacritic":
          return b.metacritic - a.metacritic; // Sort by metacritic in descending order
        default:
          return 0;
      }
    });
  };

  // Sort the filtered data based on the selected sort property
  const sortedData = sortData(filteredByPlatform, sortBy);

  return { data: sortedData, err, loading };
};

export default useGame;
