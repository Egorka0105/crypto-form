'use client';

import { FC, Suspense, useState } from 'react';
import { CustomEmailForm } from '@/components/Forms/CustomEmailForm';
import { AUTH_URL, MOCK_SIGN_UP } from '@/utils/variables';
import s from './index.module.scss';
import {Loader} from "@/components";

export const TraderAuthFirstStep: FC = () => {
  const [responseStatus, setResponseStatus] = useState({ isSend: false, isError: false });

  const handleFormSent = (status: number) => {
    if (status === 200) setResponseStatus((prevState) => ({ ...prevState, isSend: true }));
    if (status === 404 || status === 500) setResponseStatus((prevState) => ({ ...prevState, isError: true }));
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        {!responseStatus.isSend && !responseStatus.isError && (
          <CustomEmailForm
            setFormSent={handleFormSent}
            submitText={MOCK_SIGN_UP.SUBMIT}
            apiLink={AUTH_URL.REGISTRATION_TRADER_PREPARATION}
          />
        )}
      </Suspense>

      {responseStatus.isSend && (
        <div className={s.status_wrapper}>
          <h4>
            The form has been sent successfully. A link for the 2nd stage of registration has been sent to your email.
          </h4>
        </div>
      )}

      {responseStatus.isError && (
        <div className={s.status_wrapper}>
          <h4>The registration link is no longer valid. You can register once using this link.</h4>
        </div>
      )}
    </>
  );
};
