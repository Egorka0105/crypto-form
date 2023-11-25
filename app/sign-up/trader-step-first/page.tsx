'use client';

import { Formik, Form } from 'formik';
import { CustomInput } from '@/components/CustomInput';
import { FIELD_NAMES } from '@/utils/variables';
import { trader_first_step_schema, trader_schema } from '@/utils/validations';
import axios from 'axios';

const initTraderValues = {
  recipient: '',
};

const post_link = 'https://cryptobot-5rf4.onrender.com/crypto/enter/sign-up/registration-link';

export default function Page() {
  const handleSubmit = async (value: any) => {
    try {
      const { status } = await axios.post(post_link, value);
      console.log(status);
    } catch (e: Error | any) {
      console.log(e);
      await Promise.reject(e);
    }
  };

  return (
    <div>
      <Formik initialValues={initTraderValues} onSubmit={handleSubmit} validationSchema={trader_first_step_schema}>
        <Form>
          <CustomInput
            label={'Email'}
            placeholder={'example@gmail.com'}
            field_Id={'recipient'}
            field_Name={'recipient'}
          />
          <button type={'submit'}>submit</button>
        </Form>
      </Formik>
    </div>
  );
}
