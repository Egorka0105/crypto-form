'use client';

import { Formik, Form } from 'formik';
import { AUTH_URL, FIELD_NAMES } from '@/utils/variables';
import { useRouter, useSearchParams } from 'next/navigation';
import { reset_password_schema } from '@/utils/validations';
import { CustomInput } from '@/components/CustomInput';
import axios from 'axios';
import styles from './index.module.scss';

const initialValues = {
  [FIELD_NAMES.PASSWORD]: '',
  [FIELD_NAMES.CONFIRM_PASSWORD]: '',
};

export const ResetPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const paramToken = params.get('token');

  const handleSubmit = async (values: any) => {
    const reqValue = {
      token: paramToken,
      newPassword: values[FIELD_NAMES.PASSWORD],
    };

    try {
      const { status } = await axios.post(AUTH_URL.RESET, reqValue);
      if (status === 200) router.push('/login');
    } catch (e: Error | any) {
      await Promise.reject(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={reset_password_schema}>
      {({ isValid }) => (
        <Form className={styles.login_form}>
          <CustomInput
            label={'Password'}
            placeholder={'******'}
            field_Id={FIELD_NAMES.PASSWORD}
            field_Name={FIELD_NAMES.PASSWORD}
          />

          <CustomInput
            label={'Confirm Password'}
            placeholder={'******'}
            field_Id={FIELD_NAMES.CONFIRM_PASSWORD}
            field_Name={FIELD_NAMES.CONFIRM_PASSWORD}
          />

          <button className={styles.submit} type={'submit'} disabled={!isValid}>
            Confirm
          </button>
        </Form>
      )}
    </Formik>
  );
};
