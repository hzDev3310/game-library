
import useData from "./useDate";

export interface Platform {
    id: number;
    name: string;
    slug: string;
  }

const usePlatforms = () => {

 return useData<Platform>('/platforms/lists/parents')
};
export default usePlatforms;
