'use client';

import { Form, Formik } from 'formik';
import { AUTH_URL, FIELD_NAMES, FIELD_TYPES, MOCK_INPUT_DATA, MOCK_LOGIN } from '@/utils/variables';
import { login_schema } from '@/utils/validations';
import { CustomInput } from '@/components/CustomInput';
import { ForgotPassword } from '@/components/Modals';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { clsx } from 'clsx';
import styles from './index.module.scss';

const initialValues = {
  [FIELD_NAMES.EMAIL]: '',
  [FIELD_NAMES.PASSWORD]: '',
};

export const LoginForm = () => {
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
      {({ isValid }) => (
        <Form className={styles.login_form}>
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

          <ForgotPassword />

          <button className={clsx('submit_btn', styles.submit)} type={'submit'} disabled={!isValid}>
            {MOCK_LOGIN.SUBMIT}
          </button>
        </Form>
      )}
    </Formik>
  );
};
