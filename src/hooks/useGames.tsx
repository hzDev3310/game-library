import useData from "./useDate";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[]
}

const useGame = () => {
 
  return   useData<Game>('/games')
};
export default useGame;
