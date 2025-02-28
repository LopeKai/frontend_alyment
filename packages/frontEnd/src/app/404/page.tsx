'use client'

import Link from "next/link";

import styles from './styles/404.module.css'

export default function Custom404() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.containerContent}>
                <h1>
                    404
                </h1>

                <h2>
                    Acesso Negado
                </h2>

                <p>
                    Você não tem permissão para acessar esta página.
                </p>

                <Link href="/" className='text-blue-500 underline hover:text-blue-700 text-center'>
                    Volte para a página inicial e selecione o tipo de conta 'ADMIN', 'Usuário' ou 'Vendedor'
                </Link>
            </div>
        </div>
    )
}