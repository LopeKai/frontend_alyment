import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { UsersResponseDTO } from "../../types/users/usersResponseDTO";
import { fetchGetAllUsers } from "../../api/users/get/getAllUsers";

export const useUsersGetAllData = (params?: number) => {
    return useQuery<UsersResponseDTO[] | undefined>({
        queryKey: ['usersData', params ?? 0],
        queryFn: () => fetchGetAllUsers(params ?? 0),
        staleTime: 1000 * 60 * 60, //Dados do caches que vao ser considerados frescos... 1 hora.
    })
}

export const useSearchUserById = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (userId: number) => fetchGetAllUsers(userId),
        onSuccess: (data) => {
            if (!data || data.length === 0) {
                toast.warning("Usuário não encontrado!"); 
                return;
            }
            queryClient.setQueryData(['usersData', 0], data); 
        },
        onError: () => {
            toast.error("Erro ao buscar usuário!");
        },
    });
};