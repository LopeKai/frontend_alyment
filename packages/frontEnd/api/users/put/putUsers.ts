import { api } from "../../../helpers/Api";
import { usersFormData } from "../../../types/users/usersFormData";

export const fetchPutUser = async (data: usersFormData): Promise<any | undefined> => {
    try {
        const response = await api.put(`users/${data.id}`, data);
        return response.data;
    } catch(error) {
        console.log(error);
        return undefined;
    }

}