export interface ModalAlertProps {
    isOpenModalAlert: { open: boolean, userId: string };
    handleCloseModalAlert(): void;
}