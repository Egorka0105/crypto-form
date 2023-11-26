import { useState } from 'react';

export type IUseModal = [isOpen: boolean, handleModalOpen: () => void, handleModalClose: () => void];

export const useModal = (openDefault = false): IUseModal => {
    const [isOpen, setIsOpen] = useState<boolean>(openDefault);

    const handleModalOpen = () => setIsOpen(true);
    const handleModalClose = () => setIsOpen(false);

    return [isOpen, handleModalOpen, handleModalClose];
};