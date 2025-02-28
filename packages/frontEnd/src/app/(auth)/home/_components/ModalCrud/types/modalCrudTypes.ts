export interface ModalCrudProps {
    isOpenModalCrud: { open: boolean; type: string, userId?: string | "" };
    handleCloseModalCrud(): void;
}