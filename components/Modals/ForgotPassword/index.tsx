import { FC, useState } from 'react';
import { useModal } from '@/utils/helpers/use-modal';

import styles from './index.module.scss';

export const ForgotPassword: FC = () => {
  const [email, setEmail] = useState('');
  const [error, serError] = useState('');

  const [isOpen, handleModalOpen, handleModalClose] = useModal();

  return (
    <>
      <span className={styles.forgot_link} onClick={handleModalOpen}>Forgot Password?</span>
    </>
  );
};
