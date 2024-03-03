import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../services/userServices";

export const useGetUser = () => useQuery({
    queryKey: ["get-user"],
    queryFn: getUserProfile,
   
    refetchOnWindowFocus: true
  });