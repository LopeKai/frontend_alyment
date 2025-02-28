import { toast } from 'react-toastify';

import { useMutation } from "@tanstack/react-query"
import { fetchDeleteUser } from "../../api/users/delete/deleteUsers"

export const useDeleteteUser = () => {
    return useMutation({
        mutationFn: fetchDeleteUser,
        onSuccess: (data) => {
            const userId = data.id;
            toast.success(`ID: ${userId}, excluido com sucesso!`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        },
        onError: () => {
            toast.error('Desculpe, erro ao excluir Usuário', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    })
}