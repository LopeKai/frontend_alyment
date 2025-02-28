import Image from "next/image";
import styles from "./styles/loadingScreenStyles.module.css";

interface LoadingProps {
    text?: string;
    fullScreen?: boolean;
}

export function LoadingScreen({ text, fullScreen, }: LoadingProps) {
    return (
        <div className={styles.loading_container}>
            <div className={styles.loading_spinne} />
            <p>{text}</p>
        </div>
    );
}
