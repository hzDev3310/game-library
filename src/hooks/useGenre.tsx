
import { useQuery } from "@tanstack/react-query";

import apiClient from "../services/api-client";
import { schema } from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenre = () => {

 return useQuery({
  queryKey : ["genres"],
  queryFn : ()=> apiClient.get<schema<Genre>>('/genres').then(res=>res.data)
 })
};
export default useGenre;
