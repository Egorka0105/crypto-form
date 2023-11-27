'use client';

import { useModal } from '@/utils/helpers/use-modal';
import { CustomModal } from '@/components/CustomModal';
import { ForgotPasswordForm } from '@/components/Forms/ForgotPasswordForm';
import styles from './index.module.scss';


export const ForgotPassword = () => {
  const [isOpen, handleModalOpen, handleModalClose] = useModal();

  return (
    <>
      <button type={'button'} className={styles.forgot_link} onClick={handleModalOpen}>
        Forgot Password?
      </button>

      {isOpen && (
        <CustomModal title={'Forgot password'} onClose={handleModalClose} isOpen={isOpen}>
          <ForgotPasswordForm />
        </CustomModal>
      )}
    </>
  );
};
