import { useEffect } from 'react';

import Image from 'next/image';
import { Formik, Form } from 'formik';
import Modal from '@mui/material/Modal';
import { Sheet } from 'react-modal-sheet';
import { ModalCrudProps } from './types/modalCrudTypes';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';
import Aos from 'aos'

import { FormModalCrud } from './_components/FormModalCrud/FormModalCrud';
import { useCreateUser } from '../../../../../../hooks/users/usePostUsers';

import 'aos/dist/aos.css'
import { usePutUser } from '../../../../../../hooks/users/userPutUsers';
import { useSearchUserById } from '../../../../../../hooks/users/useGetAllUsers';

export function ModalCrud(props: ModalCrudProps) {
    const { isOpenModalCrud, handleCloseModalCrud } = props;

    const isMobile = useMediaQuery('(max-width: 768px)');

    const { mutate: mutateCreateUser } = useCreateUser();
    const { mutate: mutateUpdateUser } = usePutUser();
    const searchUserMutation = useSearchUserById();

    const handleSubmit = async (values: any) => {
        if (!values) return;

        let newValues = { ...values };

        if (isOpenModalCrud.type === 'Editar Usuário' && isOpenModalCrud.userId) {
            newValues = {
                ...newValues,
                id: isOpenModalCrud.userId,
            };
        }

        switch (isOpenModalCrud.type) {
            case 'Adicionar Usuário':
                return mutateCreateUser(newValues, {
                    onSuccess: () => {
                        handleCloseModalCrud();
                        searchUserMutation.mutate(0);
                    },
                });
            case 'Editar Usuário':
                return mutateUpdateUser(newValues, {
                    onSuccess: () => {
                        handleCloseModalCrud();
                        searchUserMutation.mutate(0);
                    },
                });
            default:
                console.log('Tipo de ação não reconhecido');
        }
    };

    const renderContentModal = () => {
        return (
            <Formik
                initialValues={{
                    createdAt: "",
                    name: "",
                    country: "",
                    city: "",
                    company: "",
                    job: "",
                    mother: "",
                }}
                onSubmit={(values, { resetForm }) => {
                    handleSubmit(values);
                    resetForm();
                }
                }
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ errors, isSubmitting }) => (
                    <Form>
                        <FormModalCrud loadingSubmit={isSubmitting} />
                    </Form>
                )}
            </Formik>
        );
    };

    useEffect(() => {
        if (!isMobile) {
            Aos.init();
        };
    }, []);

    return (
        <Modal
            open={isOpenModalCrud.open}
            onClose={handleCloseModalCrud}
        >
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div
                    className="relative w-[95vh] md:w-[708px] max-h-[626px] h-[calc(100vh-140px)] outline-none border-none rounded-3xl shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] bg-white overflow-hidden"
                    data-aos={!isMobile && 'flip-up'}
                >
                    <div className='flex items-center justify-center h-12 mt-4'>
                        <Image
                            src="/logo_alyment.svg"
                            alt='Alymente logo'
                            width={120}
                            height={120}
                            quality={100}
                        />
                    </div>

                    <CloseIcon
                        className="text-[#b0b0b0] absolute top-6 right-6 cursor-pointer"
                        onClick={handleCloseModalCrud}
                    />

                    <div className="px-2 md:px-12 text-alyment-primary font-semibold">
                        <p>{isOpenModalCrud.type}</p>
                    </div>

                    <div className="mx-[10px] md:my-[10px] md:px-10 py-[42px] h-[calc(100vh-160px)] max-h-[826px] overflow-y-auto">
                        {renderContentModal()}
                    </div>
                </div>
            </div>
        </Modal>
    )
}