import React from 'react'

type Props = {
    allowedAccountTypes: string[],
    fallback?: React.ReactNode;
    accountType: string;
}

type AccountType = 'user' | 'admin';

export function withRenderComponentByAccountType<T extends object>(WrappedComponent: React.ComponentType<T>, { allowedAccountTypes, fallback = null, accountType }: Props) {
    return function withRenderComponentByAccountType(props: T) {


        if (!allowedAccountTypes.includes(accountType)) {
            if (fallback) return <>{fallback}</>
        }

        return <WrappedComponent{...props} />
    };
};