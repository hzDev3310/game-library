import { GameQuery } from "../App";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatforms";

import { useQuery } from "@tanstack/react-query";

import apiClient from "../services/api-client";
import { schema } from "../services/api-client";
export interface Game {
 
  released: string | number | Date;
  added: string | number | Date;
  created: string | number | Date;
  updated: string | number | Date;
  rating: number;
  rating_top: number;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

const useGame = (gameQuery: GameQuery) => {
  return useQuery<schema<Game> ,Error>({
    queryKey: ["games"],
    queryFn: () =>
      apiClient
        .get<schema<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platfrom?.id,
            ordering: gameQuery.order,
            search: gameQuery.searchValue,
          },
        })
        .then((res) => res.data),
  });
};

export default useGame;
