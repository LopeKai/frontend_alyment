import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify'

import { fetchCreateUser } from "../../api/users/post/postUsers";

export function useCreateUser() {
    return useMutation({
        mutationFn: fetchCreateUser,
        onSuccess: (data) => {
            const userId = data.id;
            toast.success(`Usuário criado com sucesso! ID: ${userId}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })
        },
        onError: () => {
            toast.error('Desculpe, erro ao criar um Usuário', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })
        },
    })
}