"use client";

import { Table } from "@/components/Table/table";
import { Categorias } from "./_components/Categorias/Categorias";
import { withRenderComponentByAccountType } from "../../../../hocs/withRenderPageByAccountType";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { useEffect, useState } from "react";
import { AccountInformation } from "./types/homeTypes";


export default function HomePage() {
    const [accountInformation, setAccountInformation] = useState<AccountInformation>({
        accountType: "",
        userName: ""
    });

    const AuthorizedComponentCategories = withRenderComponentByAccountType((props) => <Categorias {...props} accountInformation={accountInformation} />, {
        allowedAccountTypes: ['admin'],
        fallback:
            <div
                className="flex flex-col w-full h-full text-red-900 items-center justify-center"
            >
                <h1>Informações apenas para ADMIM</h1>

                <DisplaySettingsIcon className="text-black" />
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
            <AuthorizedComponentCategories />

            <Table />
        </div>
    )
}