'use client'

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import { LOGIN_PATH } from "@/routes/routes";

export function Header() {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        sessionStorage.clear();
        router.push(LOGIN_PATH);
    };

    return (
        <div className="w-full flex justify-between items-center px-10 h-16 bg-alyment-primary drop-shadow-xl">
            <Image
                src="/logo_alyment.svg"
                alt='Alymente logo'
                width={120}
                height={120}
                quality={100}
            />

            {
                pathname !== '/' && (
                    <button
                        title="Voltar para tela LOGIN"
                        type="button"
                        onClick={handleLogout}
                        className="text-white border-none outline-none"
                    >
                        SAIR
                    </button>
                )
            }

        </div>
    )
}