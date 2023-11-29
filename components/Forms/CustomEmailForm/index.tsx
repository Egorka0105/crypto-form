'use client';

import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';

import styles from './index.module.scss';
import { FIELD_NAMES, MOCK_FORGOT_PASSWORD, MOCK_INPUT_DATA } from '@/utils/variables';
import { clsx } from 'clsx';
import { email_schema } from '@/utils/validations';
import axios from 'axios';
import { Loader } from '@/components/Loader';

interface ICustomEmailFormProps {
  setFormSent: (status: number) => void;
  submitText: string;
  apiLink: string;
}

export const CustomEmailForm: FC<ICustomEmailFormProps> = ({ setFormSent, submitText, apiLink }) => {
  const [email, setEmail] = useState('');
  const [error, serError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const validEmail = await email_schema.validate(e.target.value, { abortEarly: false });
      setEmail(() => validEmail);
      serError(() => '');
    } catch (e: any) {
      serError(e.message);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const reqValue = { [FIELD_NAMES.RECIPIENT]: email };
    try {
      const { status } = await axios.post(apiLink, reqValue);
      if (status === 200) setFormSent(status);
    } catch (e: any) {
      setFormSent(e.status);
      await Promise.reject(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!loading ? (
        <div className={styles.form}>
          <label htmlFor={FIELD_NAMES.RECIPIENT}>{MOCK_INPUT_DATA.EMAIL.LABEL}</label>
          <input
            className={clsx({ error: error })}
            onChange={handleChange}
            placeholder={MOCK_INPUT_DATA.EMAIL.PLACEHOLDER}
            id={FIELD_NAMES.RECIPIENT}
          />
          {error && <span className={'input_error'}>{error}</span>}

          <button onClick={handleSubmit} className={'submit_btn'} type={'button'} disabled={!email || !!error}>
            {submitText}
          </button>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
