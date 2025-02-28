import { toast } from 'react-toastify'

import { useMutation } from "@tanstack/react-query";
import { fetchPutUser } from "../../api/users/put/putUsers";

export function usePutUser() {
    return useMutation({
        mutationFn: fetchPutUser,
        onSuccess: (data) => {
            const userId = data.id;
            toast.success(`ID: ${userId} - Editado com sucesso!`, {
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
            toast.error('Desculpe, erro ao editar Usuário', {
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
    })
}