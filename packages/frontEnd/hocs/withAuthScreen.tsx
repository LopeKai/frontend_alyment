'use client';

import { useState, useEffect } from "react";
import { Loading } from "@/components/Loading/Loading";
import { LoadingScreen } from "@/components/LoadingScreen/LoadingScreen";

export function withAuthScreen<T extends object>(WrappedComponent: React.ComponentType<T>) {
    return function AuthScreenWrapper(props: T) {
        const [showScreen, setShowScreen] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                setShowScreen(false);
            }, 1000);

            return () => clearTimeout(timer);
        }, []);

        if (showScreen) {
            return (
                <LoadingScreen text="Por favor, Aguarde..."/>
            );
        }

        return <WrappedComponent {...props} />;
    };
}