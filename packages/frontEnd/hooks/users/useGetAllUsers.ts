import { useQuery } from "@tanstack/react-query";

import { UsersResponseDTO } from "../../types/users/usersResponseDTO";
import { fetchGetAllUsers } from "../../api/users/get/getAllUsers";

export const useUsersGetAllData = () => {
    return useQuery<UsersResponseDTO[] | undefined>({
        queryKey:['usersData'],
        queryFn: fetchGetAllUsers,
        staleTime: 1000 * 60 * 60, //Dados do caches que vao ser considerados frescos... 1 hora.
    })
}