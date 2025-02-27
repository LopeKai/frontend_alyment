'use client';

import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"

interface AuthLayoutProps {
    children: React.ReactNode
}

const queryClient = new QueryClient();

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}