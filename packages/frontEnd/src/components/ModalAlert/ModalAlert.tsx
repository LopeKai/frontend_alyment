import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import WarningIcon from '@mui/icons-material/Warning';

import { ModalAlertProps } from './types/modalAlertTypes';
import { useDeleteteUser } from '../../../hooks/users/useDeleteUsers';
import { useSearchUserById } from '../../../hooks/users/useGetAllUsers';
import { useMediaQuery } from '@mui/material';

export function ModalAlert(props: ModalAlertProps) {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const { isOpenModalAlert, handleCloseModalAlert } = props;

    const { mutate: mutationDeleteUser } = useDeleteteUser();
    const searchUserMutation = useSearchUserById();

    const handleSubmitDeleteUser = () => {
        if (!isOpenModalAlert.userId) return;
        mutationDeleteUser(isOpenModalAlert.userId);
        handleCloseModalAlert();
        searchUserMutation.mutate(0); // vai atualizar a lista!
    };

    return (
        <Modal
            open={isOpenModalAlert.open}
            onClose={handleCloseModalAlert}
        >
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
                <div
                    className="absolute bg-white border rounded-3xl h-[280px] outline-none w-[95vw] md:w-[400px]"
                    data-aos={!isMobile && 'zoom-in'}
                >
                    <CloseIcon
                        className="text-[#b0b0b0] absolute top-6 right-6 cursor-pointer"
                        data-aos-duration="500"
                        onClick={handleCloseModalAlert}
                    />

                    <div className="w-full h-full flex flex-col items-center py-10">
                        <WarningIcon className='w-14 h-14 text-yellow-400' />

                        <h1 className='text-2xl my-2 text-red-700'>Excluir Usuário</h1>

                        <p className='text-sm'>
                            Tem certeza que deseja excluir o usuário?
                        </p>

                        <div className="mt-10 w-full grid grid-cols-2 gap-4 px-10">
                            <button
                                title='Não apagar usuário'
                                className="border py-4 rounded-md bg-green-600 hover:bg-green-700 text-white"
                                type='button'
                                onClick={handleCloseModalAlert}
                            >
                                Cancelar
                            </button>

                            <button
                                title='Apagar Usuário'
                                className="border py-4 rounded-md bg-red-700 hover:bg-red-800 text-white"
                                type='button'
                                onClick={() => handleSubmitDeleteUser()}
                            >
                                Apagar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}