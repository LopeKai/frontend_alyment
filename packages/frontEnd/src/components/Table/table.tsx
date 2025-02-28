import { useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    TableContainer,
    Paper,
    Table as TableUi,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TablePagination,
    Avatar,
    IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

import { useUsersGetAllData } from '../../../hooks/users/useGetAllUsers';
import { FielterField } from '../FilterField.tsx/FilterField';

import 'react-loading-skeleton/dist/skeleton.css';
import { ModalCrud } from '@/app/(auth)/home/_components/ModalCrud/ModalCrud';
import { ModalAlert } from '../ModalAlert/ModalAlert';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export function Table() {
    const [isOpenModalCrud, setIsOpenModalCrud] = useState<{ open: boolean, type: string, userId: string; }>({
        open: false,
        type: '',
        userId: "",
    });
    const [isOpenModalAlert, setIsOpenModalAlert] = useState<{ open: boolean, userId: string; }>({
        open: false,
        userId: ""
    });

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const { data: usersData, isLoading, isError } = useUsersGetAllData();
    const currentData = usersData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleEditAndDeleteUser = (userId: string, type: string) => {
        if (type === "Editar Usuário") {
            setIsOpenModalCrud(() => ({
                open: true,
                type: type || '',
                userId: userId,
            }));
        } else {
            setIsOpenModalAlert(() => ({
                open: true,
                userId: userId,
            }));
        }
    };

    const handleCloseModalCrud = (type?: string) => {
        setIsOpenModalCrud((prevState) => ({
            open: false,
            type: '',
            userId: '',
        }));
    };

    const handleCloseModalAlert = () => {
        setIsOpenModalAlert(() => ({
            open: false,
            userId: "",
        }));
    };

    if (isError) {
        return <div className="flex items-center justify-center">
            <h1>Desculpe, erro ao carregar os dados.</h1>
        </div>;
    }

    return (
        <div className='flex flex-col gap-4'>
            {
                isLoading ?
                    <Skeleton
                        height="calc(100vh - 130px)"
                        style={{ borderRadius: '20px' }}
                    />
                    :
                    <>
                        <FielterField />

                        <TableContainer>
                            <TableUi>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Avatar</StyledTableCell>
                                        <StyledTableCell>Nome</StyledTableCell>
                                        <StyledTableCell>Cargo</StyledTableCell>
                                        <StyledTableCell>Empresa</StyledTableCell>
                                        <StyledTableCell>Cidade</StyledTableCell>
                                        <StyledTableCell>País</StyledTableCell>
                                        <StyledTableCell>Ações</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {currentData?.map((user) => (
                                        <StyledTableRow key={user.id}>
                                            <StyledTableCell>
                                                <Avatar src={user.avatar} alt={user.name} />
                                            </StyledTableCell>
                                            <StyledTableCell>{user.name}</StyledTableCell>
                                            <StyledTableCell>{user.job}</StyledTableCell>
                                            <StyledTableCell>{user.company}</StyledTableCell>
                                            <StyledTableCell>{user.city}</StyledTableCell>
                                            <StyledTableCell>{user.country}</StyledTableCell>
                                            <StyledTableCell>
                                                <IconButton onClick={() => handleEditAndDeleteUser(user.id, 'Editar Usuário')} aria-label="editar">
                                                    <EditIcon className="w-5 h-5" />
                                                </IconButton>
                                                <IconButton onClick={() => handleEditAndDeleteUser(user.id, 'Deletar Usuário')} aria-label="excluir">
                                                    <DeleteIcon className="w-5 h-5" />
                                                </IconButton>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </TableUi>
                        </TableContainer>

                        <TablePagination
                            rowsPerPageOptions={[10]}
                            component="div"
                            count={usersData?.length || 0}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </>
            }

            {
                isOpenModalCrud.open && (
                    <ModalCrud
                        isOpenModalCrud={isOpenModalCrud}
                        handleCloseModalCrud={handleCloseModalCrud}
                    />
                )
            }

            {
                isOpenModalAlert && (
                    <ModalAlert
                        isOpenModalAlert={isOpenModalAlert}
                        handleCloseModalAlert={handleCloseModalAlert}
                    />
                )
            }
        </div>
    );
}
