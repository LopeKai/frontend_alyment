import { api } from "../../../helpers/Api";
import { UsersResponseDTO } from "../../../types/users/usersResponseDTO";

export const fetchGetAllUsers = async (params: number): Promise<UsersResponseDTO[] | undefined> => {
    try {
        const response = await api.get<UsersResponseDTO[]>('/users', {
            params: params ? { id: params } : {},
        });
        return response.data;
    } catch (error) {
        console.log(error)
        return undefined;
    }
}