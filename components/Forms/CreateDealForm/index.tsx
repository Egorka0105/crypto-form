'use client';

import { Form, Formik } from 'formik';
import { CustomUploadInput } from '@/components/CustomUploadInput';
import { CustomTextArea } from '@/components/CustomTextArea';
import axios, { AxiosRequestConfig } from 'axios';
import { FIELD_NAMES, TRADER_URL } from '@/utils/variables';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormikHelpers } from 'formik';
import { create_deal_schema } from '@/utils/validations';

const initialValues = {
  [FIELD_NAMES.TEXT]: '',
  [FIELD_NAMES.FILE]: null,
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
      formData.append(FIELD_NAMES.FILE, values.file);
      formData.append(FIELD_NAMES.TEXT, values.text);
      const { status } = await axios.post(TRADER_URL.CREATE_DEAL, formData, config);
      if (status === 200) resetForm();
    } catch (e: any) {
      if (e.status === 500) alert('server error 500');
      if (e.status === 403 || e.status === 500) router.push('/login');
      await Promise.reject(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={create_deal_schema}>
      {({ isValid }) => (
        <Form>
          <CustomTextArea label={'Deal description'} placeholder={'Text'} field_Name={'text'} field_Id={'text'} />
          <CustomUploadInput label={'Upload photo'} field_Id={'file'} field_Name={'file'} />
          <button className={'submit_btn'} type={'submit'} disabled={!isValid}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};
