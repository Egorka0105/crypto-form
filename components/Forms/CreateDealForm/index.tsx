'use client';

import { Form, Formik } from 'formik';
import { CustomUploadInput } from '@/components/CustomUploadInput';
import { CustomTextArea } from '@/components/CustomTextArea';
import axios, { AxiosRequestConfig } from 'axios';
import { TRADER_URL } from '@/utils/variables';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormikHelpers } from 'formik';

const initialValues = {
  text: '',
  file: null,
};

export const CreateDealForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const accessToken = params.get('token');

  const handleSubmit = async (values: any, { resetForm }: FormikHelpers<any>) => {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-type': 'multipart/form-data',
      },
    };
    try {
      const formData = new FormData();
      formData.append('file', values.file);
      formData.append('text', values.text);
      const { status } = await axios.post(TRADER_URL.CREATE_DEAL, formData, config);
      if (status === 200) resetForm();
    } catch (e: any) {
      if (e.response.status === 403) router.push('/login');
      await Promise.reject(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <CustomTextArea label={'Deal description'} placeholder={'Text'} field_Name={'text'} field_Id={'text'} />
        <CustomUploadInput label={'Upload photo'} field_Id={'file'} field_Name={'file'} />
        <button type={'submit'}>Send</button>
      </Form>
    </Formik>
  );
};
