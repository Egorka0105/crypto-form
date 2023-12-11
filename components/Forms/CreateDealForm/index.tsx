'use client';

import { Form, Formik } from 'formik';
import { CustomUploadInput } from '@/components/CustomUploadInput';
import { CustomTextArea } from '@/components/CustomTextArea';
import axios, { AxiosRequestConfig } from 'axios';
import { FIELD_NAMES, TRADER_URL } from '@/utils/variables';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormikHelpers } from 'formik';
import { create_deal_schema } from '@/utils/validations';
import { useState } from 'react';
import { Loader } from '@/components';
import { toastMessage } from '@/utils/helpers';
import { API } from '@/utils/api';

const initialValues = {
  [FIELD_NAMES.TEXT]: '',
  [FIELD_NAMES.FILE]: null,
};

export const CreateDealForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: any, { resetForm }: FormikHelpers<any>) => {
    setLoading(true);
    const config: AxiosRequestConfig = {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    };
    try {
      const formData = new FormData();
      formData.append(FIELD_NAMES.TEXT, values.text);
      formData.append('dealAnnouncementId', 52 as any);
      values.file && formData.append(FIELD_NAMES.FILE, values.file);
      const { status, data } = await API.post(TRADER_URL.CREATE_DEAL, formData, config);
      console.log('data', data);
      if (status === 200) await toastMessage('Data sent successfully', 'success');
    } catch (e: any) {
      if (e.response.status === 403) {
        await toastMessage(`${e.response.status} Token invalid`, 'error');
        await router.push('/login');
      } else {
        await toastMessage(`${e.response.status} We have a problem`, 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!loading ? (
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
      ) : (
        <Loader />
      )}
    </>
  );
};
