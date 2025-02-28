import { api } from "../../../helpers/Api";

export const fetchDeleteUser = async (id: string): Promise<any | undefined> => {
    try {
        const response = await api.delete(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}
