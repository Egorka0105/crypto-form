'use client';

import { Formik, Form } from 'formik';
import { CustomInput } from '@/components/CustomInput';
import { FIELD_NAMES } from '@/utils/variables';
import { trader_schema } from '@/utils/validations';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';

const initTraderValues = {
  [FIELD_NAMES.FULL_NAME]: '',
  [FIELD_NAMES.EMAIL]: '',
  [FIELD_NAMES.TG_CHANNEL_NAME]: '',
  [FIELD_NAMES.PASSWORD]: '',
  [FIELD_NAMES.CONFIRM_PASSWORD]: '',
};

const post_link = 'https://cryptobot-5rf4.onrender.com/crypto/enter/sign-up/trader';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  const token = params.get('token');

  const handleSubmit = async (value: any) => {
    const reqValue = {
      telegramChannelName: value[FIELD_NAMES.TG_CHANNEL_NAME],
      registrationToken: token,
      personDto: {
        password: value[FIELD_NAMES.PASSWORD],
        email: value[FIELD_NAMES.EMAIL],
        fullName: value[FIELD_NAMES.FULL_NAME],
      },
    };
    try {
      const { status } = await axios.post(post_link, reqValue);
      if (status === 200) router.push('/login');
    } catch (e: Error | any) {
      await Promise.reject(e);
    }
  };

  return (
    <div>
      <Formik initialValues={initTraderValues} onSubmit={handleSubmit} validationSchema={trader_schema}>
        <Form>
          <CustomInput
            label={'Name'}
            placeholder={'Jon Smith'}
            field_Id={FIELD_NAMES.FULL_NAME}
            field_Name={FIELD_NAMES.FULL_NAME}
          />

          <CustomInput
            label={'Email'}
            placeholder={'example@gmail.com'}
            field_Id={FIELD_NAMES.EMAIL}
            field_Name={FIELD_NAMES.EMAIL}
          />

          <CustomInput
            label={'Telegram channel name'}
            placeholder={'Telegram channel name'}
            field_Id={FIELD_NAMES.TG_CHANNEL_NAME}
            field_Name={FIELD_NAMES.TG_CHANNEL_NAME}
          />

          <CustomInput
            label={'Password'}
            placeholder={'*******'}
            field_Id={FIELD_NAMES.PASSWORD}
            field_Name={FIELD_NAMES.PASSWORD}
          />

          <CustomInput
            label={'Confirm Password'}
            placeholder={'*******'}
            field_Id={FIELD_NAMES.CONFIRM_PASSWORD}
            field_Name={FIELD_NAMES.CONFIRM_PASSWORD}
          />

          <button type={'submit'}>submit</button>
        </Form>
      </Formik>
    </div>
  );
}
