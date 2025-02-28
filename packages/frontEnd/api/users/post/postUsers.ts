import { api } from "../../../helpers/Api";
import { usersFormData } from "../../../types/users/usersFormData";

export const fetchCreateUser = async (data: usersFormData): Promise<any | undefined> => {
    try {
        const response = await api.post('/users',data);
        return response.data;
    } catch(error) {
        console.log(error)
        return undefined;
    }
}