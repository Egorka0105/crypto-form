'use client';

import { ChangeEvent, useState } from 'react';
import { email_schema } from '@/utils/validations';
import { AUTH_URL, FIELD_NAMES, MOCK_FORGOT_PASSWORD, MOCK_INPUT_DATA } from '@/utils/variables';
import axios from 'axios';
import { clsx } from 'clsx';
import styles from './index.module.scss';

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [error, serError] = useState('');
  const [isFormSent, setFormSent] = useState(false);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const validEmail = await email_schema.validate(e.target.value, { abortEarly: false });
      setEmail(() => validEmail);
      serError(() => '');
    } catch (error: any) {
      serError(error.message);
    }
  };

  const handleSubmit = async () => {
    const reqValue = { [FIELD_NAMES.RECIPIENT]: email };
    try {
      const { status } = await axios.post(AUTH_URL.FORGOT, reqValue);
      if (status === 200) setFormSent(true);
    } catch (e) {
      await Promise.reject(e);
    }
  };

  return (
    <>
      {!isFormSent && (
        <div className={styles.forgot_form}>
          <label htmlFor={FIELD_NAMES.RECIPIENT}>{MOCK_INPUT_DATA.EMAIL.LABEL}</label>
          <input
            className={clsx({ error: error })}
            onChange={handleChange}
            placeholder={MOCK_INPUT_DATA.EMAIL.PLACEHOLDER}
            id={FIELD_NAMES.RECIPIENT}
          />
          {error && <span className={'input_error'}>{error}</span>}

          <button
            onClick={handleSubmit}
            className={'submit_btn'}
            type={'button'}
            disabled={!email || !!error}
          >
            {MOCK_FORGOT_PASSWORD.SUBMIT}
          </button>
        </div>
      )}

      {isFormSent && (
        <div>
          <h4>A letter to change the password has been sent to the mail</h4>
        </div>
      )}
    </>
  );
};
