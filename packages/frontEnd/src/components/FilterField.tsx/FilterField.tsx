'use client';

import { Formik, Field, Form } from 'formik';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { useSearchUserById } from '../../../hooks/users/useGetAllUsers';

import { Loading } from '../Loading/Loading';

export function FielterField() {
    const searchUserMutation = useSearchUserById();

    const handleSearch = (value: string) => {
        if (!value) return;
        searchUserMutation.mutate(Number(value));
    };

    const handleDeleteSearch = () => {
        searchUserMutation.mutate(0);
    };

    return (
        <Formik
            initialValues={{ input: "" }}
            onSubmit={(values) => {
                handleSearch(values.input);
            }}
        >
            {({ values, setFieldValue }) => (
                <Form>
                    <div className="w-full max-w-[400px] h-[50px] flex items-center gap-2 border bg-white text-[#64748b] rounded-xl py-2 px-3">
                        {searchUserMutation.isPending ? (
                            <Loading />
                        ) : (
                            <PersonIcon className="text-green-500" />
                        )}

                        <Field
                            name="input"
                            type="number"
                            className="w-full h-full bg-transparent outline-none overflow-hidden"
                            placeholder="Buscar usuário pelo ID"
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    handleSearch(values.input);
                                }
                            }}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const value = e.target.value;
                                setFieldValue("input", value);
                            }}
                        />

                        {values.input && (
                            <div
                                onClick={() => {
                                    setFieldValue("input", "");
                                    handleDeleteSearch();
                                }}
                            >
                                <CloseIcon className="cursor-pointer text-red-500" />
                            </div>
                        )}

                        <div>
                            <button
                                type="button"
                                className="flex items-center justify-center gap-1 p-0 w-10 h-10 rounded-[50%] border-none text-white bg-black cursor-pointer text-xs"
                                onClick={() => handleSearch(values.input)}
                            >
                                <SearchIcon className="text-white" />
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}