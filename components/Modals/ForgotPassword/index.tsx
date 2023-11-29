'use client';

import { useModal } from '@/utils/helpers/use-modal';
import { CustomModal } from '@/components/CustomModal';
import { ForgotPasswordForm } from '@/components/Forms/ForgotPasswordForm';
import { MOCK_FORGOT_PASSWORD } from '@/utils/variables';
import styles from './index.module.scss';

export const ForgotPassword = () => {
  const [isOpen, handleModalOpen, handleModalClose] = useModal();

  return (
    <>
      <button type={'button'} className={styles.forgot_link} onClick={handleModalOpen}>
        {MOCK_FORGOT_PASSWORD.LINK}
      </button>

      {isOpen && (
        <CustomModal title={MOCK_FORGOT_PASSWORD.TITLE} onClose={handleModalClose} isOpen={isOpen}>
          <ForgotPasswordForm />
        </CustomModal>
      )}
    </>
  );
};
