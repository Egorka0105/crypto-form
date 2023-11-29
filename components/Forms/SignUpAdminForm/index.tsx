'use client';

import { FC } from 'react';
import { Formik, Form } from 'formik';
import { CustomInput } from '@/components/CustomInput';
import { AUTH_URL, FIELD_NAMES, FIELD_TYPES, MOCK_INPUT_DATA, MOCK_SIGN_UP } from '@/utils/variables';
import { useRouter } from 'next/navigation';
import { admin_schema } from '@/utils/validations';
import axios from 'axios';
import { clsx } from 'clsx';
import styles from './index.module.scss';

const initAdminValues = {
  [FIELD_NAMES.FULL_NAME]: '',
  [FIELD_NAMES.EMAIL]: '',
  [FIELD_NAMES.PASSWORD]: '',
  [FIELD_NAMES.CONFIRM_PASSWORD]: '',
};

export const SignUpAdminForm: FC = () => {
  const router = useRouter();

  const handleSubmit = async (value: any) => {
    try {
      const { status } = await axios.post(AUTH_URL.REGISTRATION_ADMIN, value);
      if (status === 200) router.push('/login');
    } catch (e: Error | any) {
      await Promise.reject(e);
    }
  };

  return (
    <Formik initialValues={initAdminValues} onSubmit={handleSubmit} validationSchema={admin_schema}>
      {({ isValid }) => (
        <Form className={styles.form}>
          <CustomInput
            label={MOCK_INPUT_DATA.NAME.LABEL}
            placeholder={MOCK_INPUT_DATA.NAME.PLACEHOLDER}
            field_Id={FIELD_NAMES.FULL_NAME}
            field_Name={FIELD_NAMES.FULL_NAME}
          />

          <CustomInput
            label={MOCK_INPUT_DATA.EMAIL.LABEL}
            placeholder={MOCK_INPUT_DATA.EMAIL.PLACEHOLDER}
            field_Id={FIELD_NAMES.EMAIL}
            field_Name={FIELD_NAMES.EMAIL}
          />

          <CustomInput
            label={MOCK_INPUT_DATA.PASSWORD.LABEL}
            placeholder={MOCK_INPUT_DATA.PASSWORD.PLACEHOLDER}
            field_Id={FIELD_NAMES.PASSWORD}
            field_Name={FIELD_NAMES.PASSWORD}
            type={FIELD_TYPES.PASSWORD}
          />

          <CustomInput
            label={MOCK_INPUT_DATA.CONFIRM_PASSWORD.LABEL}
            placeholder={MOCK_INPUT_DATA.CONFIRM_PASSWORD.PLACEHOLDER}
            field_Id={FIELD_NAMES.CONFIRM_PASSWORD}
            field_Name={FIELD_NAMES.CONFIRM_PASSWORD}
            type={FIELD_TYPES.PASSWORD}
          />

          <button className={clsx('submit_btn', styles.submit)} type={'submit'} disabled={!isValid}>
            {MOCK_SIGN_UP.SUBMIT}
          </button>
        </Form>
      )}
    </Formik>
  );
};
