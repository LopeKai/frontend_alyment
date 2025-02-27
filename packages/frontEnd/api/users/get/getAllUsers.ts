import { api } from "../../../helpers/Api";
import { UsersResponseDTO } from "../../../types/users/usersResponseDTO";

export const fetchGetAllUsers = async (): Promise<UsersResponseDTO[] | undefined> => {
    try {
        const response = await api.get<UsersResponseDTO[]>('/users');
        return response.data;
    } catch(error) {
        console.error(error)
        return undefined;
    }
}