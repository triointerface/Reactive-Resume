import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { LOCATIONS_KEY } from "@/client/constants/query-keys";
import { axios } from "@/client/libs/axios";
import { LocationDto } from '@/client/libs/dto/src/location/index';

export const fetchLocations = async () => {
  const response = await axios.get<LocationDto[], AxiosResponse<LocationDto[]>>(
    "/storage/locations",
  );

  return response.data;
};

export const useLocations = () => {
  const {
    error,
    isPending: loading,
    data: locations,
  } = useQuery({
    queryKey: LOCATIONS_KEY,
    queryFn: fetchLocations,
  });

  return { locations, loading, error };
};