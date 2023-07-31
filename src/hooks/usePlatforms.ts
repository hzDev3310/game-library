import { useQuery } from "@tanstack/react-query";

import apiClient from "../services/api-client";
import { schema } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<schema<Platform>>("/platforms").then((res) => res.data),
  });
};

export default usePlatforms;
