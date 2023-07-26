
import useData from "./useDate";

export interface Genre{
  id: number;
  name: string;
  image_background:string
}

const useGenre = () => {

 return useData<Genre>('/genres')
};
export default useGenre;