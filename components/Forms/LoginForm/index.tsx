'use client';

import { FC } from 'react';
import { Form, Formik } from 'formik';
import { AUTH_URL, FIELD_NAMES } from '@/utils/variables';
import { login_schema } from '@/utils/validations';
import { CustomInput } from '@/components/CustomInput';
import { ForgotPassword } from '@/components/Modals';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './index.module.scss';

const initialValues = {
  [FIELD_NAMES.EMAIL]: '',
  [FIELD_NAMES.PASSWORD]: '',
};

export const LoginForm: FC = () => {
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    try {
      const { status, data } = await axios.post(AUTH_URL.LOGIN, values);
      if (status === 200) router.push(`/profile/create-deal?token=${data.accessToken}`);
    } catch (e: Error | any) {
      await Promise.reject(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={login_schema}>
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

        <ForgotPassword />

        <button className={styles.submit} type={'submit'}>
          submit
        </button>
      </Form>
    </Formik>
  );
};
