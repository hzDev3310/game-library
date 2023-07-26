import useData from "./useDate";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  
}

const useGame = () => {
 
  return   useData<Game>('/games')
};
export default useGame;
