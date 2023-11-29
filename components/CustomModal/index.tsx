'use client';

import { FC, ReactNode, SyntheticEvent } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';

interface CustomModalProps {
  title?: string;
  onClose: Function;
  isOpen: boolean;
  children: ReactNode;
}

export const CustomModal: FC<CustomModalProps> = ({ isOpen, onClose, title, children }) => {
  const handleBackgroundClick = (event: SyntheticEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleBackgroundClick} className={styles.modal_template}>
      <div className={styles.modal}>
        <div className={styles.modal__head}>
          <h4 className={styles.title}>{title}</h4>

          <button className={styles.close_button} onClick={() => onClose()} type="button">
            <Image src={'/icons/close-button.svg'} alt="close" width={34} height={34} />
          </button>
        </div>

        <div className={styles.modal__body}>{children}</div>
      </div>
    </div>
  );
};
