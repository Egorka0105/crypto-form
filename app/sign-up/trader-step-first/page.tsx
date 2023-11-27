'use client';

import { useState } from 'react';
import { Formik, Form } from 'formik';
import { CustomInput } from '@/components/CustomInput';
import { trader_first_step_schema, trader_schema } from '@/utils/validations';
import axios from 'axios';

const initTraderValues = {
  recipient: '',
};

const post_link = 'https://cryptobot-5rf4.onrender.com/crypto/enter/sign-up/registration-link';

export default function Page() {
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (value: any) => {
    try {
      const { status } = await axios.post(post_link, value);
      if (status === 200) setIsSent(true);
    } catch (e: Error | any) {
      setIsError(true);
      await Promise.reject(e);
    }
  };

  return (
    <div>
      {!isSent && !isError && (
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
      )}
      {isSent && (
        <div>
          <h2>
            The form has been sent successfully. A link for the 2nd stage of registration has been sent to your email.
          </h2>
        </div>
      )}

      {isError && (
        <div>
          <h2>The registration link is no longer valid. You can register once using this link.</h2>
        </div>
      )}
    </div>
  );
}
