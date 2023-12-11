'use client';

import { Form, Formik } from 'formik';
import { trader_schema } from '@/utils/validations';
import { CustomInput } from '@/components/CustomInput';
import { AUTH_URL, FIELD_NAMES, FIELD_TYPES, MOCK_INPUT_DATA, MOCK_SIGN_UP } from '@/utils/variables';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Loader } from '@/components';
import { API } from '@/utils/api';

const initTraderValues = {
  [FIELD_NAMES.FULL_NAME]: '',
  [FIELD_NAMES.EMAIL]: '',
  [FIELD_NAMES.TG_CHANNEL_NAME]: '',
  [FIELD_NAMES.PASSWORD]: '',
  [FIELD_NAMES.CONFIRM_PASSWORD]: '',
};

export const TraderRegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  const registrationToken = params.get('token');
  const traderType = params.get('traderType');

  const handleSubmit = async (value: any) => {
    setLoading(true);
    const reqValue = {
      telegramChannelName: value[FIELD_NAMES.TG_CHANNEL_NAME],
      registrationToken: registrationToken,
      [FIELD_NAMES.TRADER_TYPE]: traderType,
      personDto: {
        password: value[FIELD_NAMES.PASSWORD],
        email: value[FIELD_NAMES.EMAIL],
        fullName: value[FIELD_NAMES.FULL_NAME],
      },
    };
    try {
      const { status } = await API.post(AUTH_URL.REGISTRATION_TRADER, reqValue);
      if (status === 200) router.push('/login');
    } catch (e: Error | any) {
      await Promise.reject(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!loading ? (
        <Formik initialValues={initTraderValues} onSubmit={handleSubmit} validationSchema={trader_schema}>
          {({ isValid }) => (
            <Form>
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
                label={MOCK_INPUT_DATA.TELEGRAM.LABEL}
                placeholder={MOCK_INPUT_DATA.TELEGRAM.PLACEHOLDER}
                field_Id={FIELD_NAMES.TG_CHANNEL_NAME}
                field_Name={FIELD_NAMES.TG_CHANNEL_NAME}
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

              <button className={'submit_btn'} type={'submit'} disabled={!isValid}>
                {MOCK_SIGN_UP.SUBMIT}
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
