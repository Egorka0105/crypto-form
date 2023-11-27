'use client';

import { ChangeEvent, useState } from 'react';
import { email_schema } from '@/utils/validations';
import { AUTH_URL, FIELD_NAMES } from '@/utils/variables';
import axios from 'axios';
import clsx from 'clsx';
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
    try {
      const { status } = await axios.post(AUTH_URL.FORGOT, email);
      if (status === 200) setFormSent(true);
    } catch (e) {
      await Promise.reject(e);
    }
  };

  return (
    <>
      {!isFormSent && (
        <div className={styles.forgot_form}>
          <label className={styles.label} htmlFor={FIELD_NAMES.RECIPIENT}>
            Email
          </label>
          <input
            className={clsx(styles.input, { [styles.input_error]: error })}
            onChange={handleChange}
            placeholder={'e.g. pespatron@trading.com'}
            id={FIELD_NAMES.RECIPIENT}
          />
          {error && <p className={styles.error}>{error}</p>}

          <button onClick={handleSubmit} className={styles.submit} type={'button'} disabled={!email || !!error}>
            Confirm
          </button>
        </div>
      )}

      {isFormSent && (
        <div>
          <h2>A letter to change the password has been sent to the mail</h2>
        </div>
      )}
    </>
  );
};
