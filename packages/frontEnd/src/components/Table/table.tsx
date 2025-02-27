import { useState } from 'react';
import Skeleton from 'react-loading-skeleton'
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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

import { useUsersGetAllData } from '../../../hooks/users/useGetAllUsers';
import { FielterField } from '../FilterField.tsx/FilterField';

import 'react-loading-skeleton/dist/skeleton.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
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
    const { data: usersData, isLoading, isError } = useUsersGetAllData();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const currentData = usersData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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
        </div>
    );
}
