"use client";

import CustomPaginationActionsTable from "@/components/Table/table";
import { Categorias } from "./_components/Categorias/categorias";
import { withRenderComponentByAccountType } from "../../../../hocs/withRenderPageByAccountType";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { useEffect, useState } from "react";

export default function HomePage() {
    const [accountType, setAccountType] = useState<string | null>(null);

    const AuthorizedComponentCategories = withRenderComponentByAccountType(Categorias, {
        allowedAccountTypes: ['admin'],
        fallback:
            <div
                className="flex flex-col w-full h-full text-red-900 items-center justify-center"
            >
                <h1>Informações apenas para ADMIM</h1>

                <DisplaySettingsIcon className="text-black" />
            </div>,
        accountType: accountType || "",
    });


    useEffect(() => {
        const storedAccountType = sessionStorage.getItem("accountType");
        setAccountType(storedAccountType);
    }, []);

    return (
        <div className="min-h-[calc(100vh-64px)] grid grid-cols-[300px,1fr] gap-2 px-10 py-6 pb-10">
            <AuthorizedComponentCategories />

            <CustomPaginationActionsTable />
        </div>
    )
}