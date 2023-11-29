'use client';

import { Formik, Form } from 'formik';
import { AUTH_URL, FIELD_NAMES, FIELD_TYPES, MOCK_INPUT_DATA, MOCK_RESET_PASSWORD } from '@/utils/variables';
import { useRouter, useSearchParams } from 'next/navigation';
import { reset_password_schema } from '@/utils/validations';
import { CustomInput } from '@/components/CustomInput';
import axios from 'axios';

const initialValues = {
  [FIELD_NAMES.PASSWORD]: '',
  [FIELD_NAMES.CONFIRM_PASSWORD]: '',
};

export const ResetPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const accessToken = params.get('token');

  const handleSubmit = async (values: any) => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const reqValue = {
      newPassword: values[FIELD_NAMES.PASSWORD],
    };

    try {
      const { status } = await axios.post(AUTH_URL.RESET, reqValue, config);
      if (status === 200) router.push('/login');
    } catch (e: Error | any) {
      await Promise.reject(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={reset_password_schema}>
      {({ isValid }) => (
        <Form>
          <CustomInput
            label={MOCK_RESET_PASSWORD.PASSWORD_LABEL}
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

          <button className={'submit_btn'} type={'submit'} disabled={!isValid}>
            {MOCK_RESET_PASSWORD.SUBMIT}
          </button>
        </Form>
      )}
    </Formik>
  );
};
