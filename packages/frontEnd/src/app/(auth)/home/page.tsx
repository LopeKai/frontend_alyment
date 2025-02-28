"use client";

import { Table } from "@/components/Table/table";
import { Categorias } from "./_components/Categorias/Categorias";
import { ImportantInformation } from "./_components/importantInformation/ImportantInformation";
import { withRenderComponentByAccountType } from "../../../../hocs/withRenderPageByAccountType";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { useEffect, useState } from "react";
import { AccountInformation } from "./types/homeTypes";

export default function HomePage() {
    const [accountInformation, setAccountInformation] = useState<AccountInformation>({
        accountType: "",
        userName: ""
    });

    const AuthorizedComponentCategories = withRenderComponentByAccountType((props) => <ImportantInformation {...props} />, {
        allowedAccountTypes: ['admin', 'user'],
        fallback:
            <div
                className="p-2 border flex flex-col mt-2 md:mt-5 text-center text-red-500 items-center justify-center rounded-lg ring-2 ring-stone-300/50"
            >
                <h1 className="text-alyment-primary text-xl mb-14">Painel de informações:</h1>

                <DisplaySettingsIcon className="text-black" />

                <strong>
                    Informações apenas para ADMIM ou USUÁRIOS.
                    <span className="text-sm font-medium text-zinc-700 opacity-0.5 block"> OBS: selecione admin ou usuário na tela de login.</span>
                </strong>

            </div>,
        accountType: accountInformation.accountType || "",
    });

    useEffect(() => {
        const storedAccountType = sessionStorage.getItem("accountType") || "";
        const storedUserName = sessionStorage.getItem("userName") || "";
        setAccountInformation({
            accountType: storedAccountType,
            userName: storedUserName
        });
    }, []);

    return (
        <div className="min-h-[calc(100vh-64px)] grid grid-cols-1 md:grid-cols-[300px,1fr] gap-5 md:gap-2 md:px-10 px-2 py-6 pb-10">
            <div>
                <Categorias accountInformation={accountInformation} />
                <AuthorizedComponentCategories />
            </div>

            <Table />
        </div>
    )
}