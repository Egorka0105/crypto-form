'use client';

import { FC } from 'react';
import { Form, Formik } from 'formik';
import { FIELD_NAMES } from '@/utils/variables';
import { login_schema } from '@/utils/validations';
import { CustomInput } from '@/components/CustomInput';
import styles from "./index.module.scss"
import axios from "axios";
import {useRouter} from "next/navigation";

const initialValues = {
  [FIELD_NAMES.EMAIL]: '',
  [FIELD_NAMES.PASSWORD]: '',
};

const post_link = "https://cryptobot-5rf4.onrender.com/crypto/enter/sign-in"

export const LoginForm: FC = () => {
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    try {
      const { status } = await axios.post(post_link, values);
      if (status === 200) router.push('/profile');
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

        <button className={styles.submit} type={'submit'}>submit</button>
      </Form>
    </Formik>
  );
};
