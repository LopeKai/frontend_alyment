import { useState } from "react";
import { Tooltip } from '@mui/material';

import { ModalCrud } from "../ModalCrud/ModalCrud";

import { CategoriasProps } from "./types/categoriasTypes";
import { categoriasData } from "./utils/categoriasUtils";

export function Categorias({ accountInformation }: CategoriasProps) {
    const [isOpenModalCrud, setIsOpenModalCrud] = useState<{ open: boolean, type: string }>({
        open: false,
        type: ''
    });

    const handleCloseModalCrud = (type?: string) => {
        setIsOpenModalCrud((prevState) => ({
            open: false,
            type: '',
        }));
    };

    const handleOpenModalCrud = (types?: string) => {
        if(accountInformation.accountType !== 'admin') return;
        
        setIsOpenModalCrud((prevState) => ({
            open: true,
            type: types || '',
        }));
    };

    return (
        <div className="max-h-[300px] p-1 md:p-6 rounded-lg ring-2 ring-stone-300/50">
            <h2 className="text-base md:text-2xl font-bold text-gray-800 p-1 md:px-4">
                {accountInformation.userName},
            </h2>

            <p className="p-1 md:px-4 text-sm">
                Tipo de conta:
                <strong className="inline-block uppercase ml-1">
                    {accountInformation.accountType}
                </strong>
            </p>

            <ul className="space-y-1 mt-4">
                {categoriasData.map((categoria) => (
                    <Tooltip
                        key={categoria.id}
                        title={
                            accountInformation.accountType !== 'admin'
                                ? 'Este campo é apenas para usuários ADMIN'
                                : ''
                        }
                        arrow
                    >
                        <li
                            className={`p-1 md:p-4 bg-gray-50 rounded-lg transition-colors ${accountInformation.accountType !== 'admin'
                                    ? 'opacity-50 cursor-not-allowed'
                                    : 'hover:bg-gray-100 cursor-pointer'
                                }`}
                            onClick={() => handleOpenModalCrud(categoria.type)}
                        >
                            <h3 className="text-sm md:text-lg font-semibold text-gray-700">{categoria.nome}</h3>
                            <p className="text-xs md:text-sm text-gray-500">{categoria.descricao}</p>
                        </li>
                    </Tooltip>
                ))}
            </ul>

            {isOpenModalCrud.open && (
                <ModalCrud
                    isOpenModalCrud={isOpenModalCrud}
                    handleCloseModalCrud={handleCloseModalCrud}
                />
            )}
        </div>
    );
}