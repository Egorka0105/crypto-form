'use client';

import { useState } from 'react';
import { Form, Formik } from 'formik';
import {
  AUTH_URL,
  FIELD_NAMES,
  FIELD_TYPES,
  MOCK_INPUT_DATA,
  MOCK_LOGIN,
  STORAGE_SERVICE_KEYS,
} from '@/utils/variables';
import { login_schema } from '@/utils/validations';
import { CustomInput } from '@/components/CustomInput';
import { ForgotPassword } from '@/components/Modals';
import { useRouter } from 'next/navigation';
import { Loader } from '@/components';
import { storageService } from '@/utils/services';
import axios from 'axios';

const initialValues = {
  [FIELD_NAMES.EMAIL]: '',
  [FIELD_NAMES.PASSWORD]: '',
};

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const { status, data } = await axios.post(`${process.env['NEXT_PUBLIC_API_URL']}${AUTH_URL.LOGIN}`, values);

      storageService.setItem(STORAGE_SERVICE_KEYS.ACCESS_TOKEN, data.accessToken);
      storageService.setItem(STORAGE_SERVICE_KEYS.REFRESH_TOKEN, data.refreshToken);
      console.log('status', status);
      console.log('data', data);

      if (status === 200) router.push(`/profile/create-deal?token=${data.accessToken}`);
    } catch (e: Error | any) {
      await Promise.reject(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!loading ? (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={login_schema}>
          {({ isValid }) => (
            <Form>
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

              <button className={'submit_btn'} type={'submit'} disabled={!isValid}>
                {MOCK_LOGIN.SUBMIT}
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <Loader />
      )}
    </>
  );
};
