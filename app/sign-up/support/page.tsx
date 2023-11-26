'use client';

import { Formik, Form } from 'formik';
import { CustomInput } from '@/components/CustomInput';
import { FIELD_NAMES } from '@/utils/variables';
import { support_schema } from '@/utils/validations';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const initSupportValues = {
  [FIELD_NAMES.FULL_NAME]: '',
  [FIELD_NAMES.EMAIL]: '',
  [FIELD_NAMES.PASSWORD]: '',
  [FIELD_NAMES.CONFIRM_PASSWORD]: '',
};

const post_link = 'https://cryptobot-5rf4.onrender.com/crypto/enter/sign-up/support';

export default function Page() {
  const router = useRouter();

  const handleSubmit = async (value: any) => {
    try {
      const { status } = await axios.post(post_link, value);
      if (status === 200) router.push('/login');
    } catch (e: Error | any) {
      await Promise.reject(e);
    }
  };

  return (
    <div>
      <Formik initialValues={initSupportValues} onSubmit={handleSubmit} validationSchema={support_schema}>
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
