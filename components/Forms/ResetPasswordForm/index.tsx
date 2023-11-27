'use client';

import { FC } from 'react';
import styles from './index.module.scss';
import { Formik, Form } from 'formik';
import { AUTH_URL, FIELD_NAMES } from '@/utils/variables';
import { useRouter } from 'next/navigation';
import { reset_password_schema } from '@/utils/validations';
import { CustomInput } from '@/components/CustomInput';
import axios from 'axios';

const initialValues = {
  [FIELD_NAMES.EMAIL]: '',
  [FIELD_NAMES.PASSWORD]: '',
};

export const ResetPasswordForm: FC = () => {
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    try {
      const { status } = await axios.post(AUTH_URL.RESET, values);
      if (status === 200) router.push('/profile');
    } catch (e: Error | any) {
      await Promise.reject(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={reset_password_schema}>
      <Form className={styles.login_form}>
        <CustomInput
          label={'Email'}
          placeholder={'Email'}
          field_Id={FIELD_NAMES.EMAIL}
          field_Name={FIELD_NAMES.EMAIL}
        />

        <CustomInput
          label={'Password'}
          placeholder={'******'}
          field_Id={FIELD_NAMES.PASSWORD}
          field_Name={FIELD_NAMES.PASSWORD}
        />

        <button className={styles.submit} type={'submit'}>
          Confirm
        </button>
      </Form>
    </Formik>
  );
};
